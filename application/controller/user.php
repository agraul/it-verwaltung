<?php

class user extends controller
{

    public $request_method;
    public $data;

    public function __construct(string $request_method)
    {
        $this->request_method = $request_method;
        header('Content-Type: application/json');
        $this->data = [];
    }

    public function __destruct()
    {
        echo json_encode($this->data);
    }

    public function setpassword()
    {
        $this->data = [
            'success' => false
        ];
    }

    public function login()
    {
        
    }

    public function register()
    {
        require '../db.php';
        $link = new db();
        $db = $link::get();
        $groupId = (int) $_POST['groupid'];
        $firstName = (string) $_POST['firstname'];
        $lastName = (string) $_POST['lastname'];
        $username = (string) $_POST['username'];
        $pw = (string) password_hash((string) $_POST['pw'], PASSWORD_BCRYPT);
        $sql = "INSERT INTO benutzer (b_id, gruppe_g_id, b_vorname, b_nachname, b_username, b_passwort) VALUES (27, '?', '?', '?', '?', '?');";
        $query = $db->prepare($sql);
        $query->execute(array($groupId, $firstName, $lastName, $username, $pw));
        $this->data[0] = gettype($query);
        $this->data[1] = $_POST;

        foreach ($query as $r) {


            # var_dump($r);   
        }
    }

    public function all()
    {
        require '../db.php';
        $link = new db();
        $db = $link::get();
        $query = $db->prepare("SELECT * FROM benutzer;");
        $query->execute();
        $i = 0;
        foreach ($query as $row) {
            $this->data[$i] = new stdClass();
            $this->data[$i]->userid = (int) $row['b_id'];
            $this->data[$i]->groupid = (int) $row['gruppe_g_id'];
            $this->data[$i]->username = (string) $row['b_username'];
            $this->data[$i]->pw = (string) $row['b_passwort'];
            $this->data[$i]->vorname = (string) $row['b_vorname'];
            $this->data[$i]->nachname = (string) $row['b_nachname'];
            $i++;
        }
    }

    public function delete()
    {
        $id = (int) $_GET['id'];
        require '../db.php';
        $link = new db();
        $db = $link::get();
        $query = $db->prepare("DELETE FROM benutzer WHERE b_id=?;");
        $query->execute(array($id));
    }

}
