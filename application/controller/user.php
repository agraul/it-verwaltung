<?php

class user extends controller
{

    public $data;
    private $db;

    public function __construct(string $action)
    {
        header('Content-Type: application/json');
        $this->data = [];
        require '../db.php';
        $link = new db();
        $this->db = $link::get();
        $_POST = json_decode(file_get_contents('php://input'), true);
        $this->cors();
        if ($action !== 'login') {
            if ($this->decode() === false) {
                switch ($action) {
                    case 'delete':
                    case 'add':
                    case 'changeRoom':
                    case 'update':
                    case 'edit':
                    case 'register':
                    case 'setpassword':
                    case 'changegroup':
                        http_response_code(401);
                        exit;
                }
            }
        }
    }

    public function __destruct()
    {
        echo json_encode($this->data);
    }

    public function setpassword()
    {
        $this->data[0] = new stdClass();
        try {
            $id = (int) $_POST['id'];
            $pw = (string) $_POST['pw'];
            $hash = (string) password_hash($pw, PASSWORD_BCRYPT);
            $query = $this->db->prepare("UPDATE benutzer SET b_passwort = ? WHERE b_id = ?;");
            $res = $query->execute(array($hash, $id));
            $this->data[0]->success = true;
        } catch (Exception $e) {
            $this->data[0]->success = false;
        }
    }

    public function login()
    {
        if ($this->verify($_GET['usr']) === false || $this->verify($_GET['pw']) === false) {
            http_response_code(400);
            return;
        }

        $username = (string) $_GET['usr'];
        $pw = (string) $_GET['pw'];
        $sql = "SELECT * FROM benutzer INNER JOIN gruppe ON gruppe_g_id=g_id WHERE b_username=? ";
        $query = $this->db->prepare($sql);
        $result = $query->execute(array($username));
        if ((int) $query->rowCount() === 0) {
            http_response_code(400);
            return;
        }
        foreach ($query as $row) {
            $hash = (string) $row['b_passwort'];
            $permission = (bool) $row['g_privilegiert'];
        }
        if (password_verify($pw, $hash) === false) {
            http_response_code(400);
            return;
        } else {
            require '../php-jwt/JWT.php';
            $jwt = new Firebase\JWT\JWT();
            $payload = [
                'exp' => time() + 60 * 60 * 2,
                'admin' => (bool) $permission,
            ];
            $this->data[0] = new stdClass();
            $this->data[0]->token = $jwt->encode($payload, KEY);
        }
    }

    public function register()
    {
        if ($this->verify($_POST['groupid']) === false || $this->verify($_POST['firstname']) === false || $this->verify($_POST['lastname']) === false || $this->verify($_POST['username']) === false || $this->verify($_POST['pw']) === false) {
            http_response_code(400);
            return;
        }
        $groupId = (int) $_POST['groupid'];
        $firstName = (string) $_POST['firstname'];
        $lastName = (string) $_POST['lastname'];
        $username = (string) $_POST['username'];
        $pw = (string) password_hash((string) $_POST['pw'], PASSWORD_BCRYPT);
        $sql = "INSERT INTO benutzer (gruppe_g_id, b_vorname, b_nachname, b_username, b_passwort) VALUES (?,?,?,?,?);";
        $query = $this->db->prepare($sql);
        $res = $query->execute(array($groupId, $firstName, $lastName, $username, $pw));
        if ($res === false) {
            http_response_code(409);
            return;
        }
    }

    public function all()
    {
        $query = $this->db->prepare("SELECT * FROM benutzer;");
        $query->execute();
        $i = 0;
        foreach ($query as $row) {
            $this->data[$i] = new stdClass();
            $this->data[$i]->userid = (int) $row['b_id'];
            $this->data[$i]->groupid = (int) $row['gruppe_g_id'];
            $this->data[$i]->username = (string) $row['b_username'];
            $this->data[$i]->pw = (string) $row['b_passwort'];
            $this->data[$i]->firstname = (string) $row['b_vorname'];
            $this->data[$i]->lastname = (string) $row['b_nachname'];
            $i++;
        }
    }

    /**
     * @TODO Needs review of success reporting
     */
    public function delete()
    {
        $id = (int) $_GET['id'];
        $query = $this->db->prepare("DELETE FROM benutzer WHERE b_id=?;");
        $result = $query->execute(array($id));
        $this->data[0] = new stdClass();
        $this->data[0]->success = (bool) $result;
    }

    public function changegroup()
    {
        $this->data[0] = new stdClass();
        try {
            $id = (int) $_POST['id'];
            $groupid = (int) $_POST['groupid'];
            $query = $this->db->prepare("UPDATE benutzer SET gruppe_g_id=? WHERE b_id=?;");
            $result = $query->execute(array($groupid, $id));
            $this->data[0]->success = true;
        } catch (Exception $e) {
            $this->data[0]->success = false;
        }
    }

}
