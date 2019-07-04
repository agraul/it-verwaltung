<?php

class software extends controller
{

    public $data;
    private $db;

    public function __construct()
    {
        header('Content-Type: application/json');
        $this->data = [];
        require '../db.php';
        $link = new db();
        $this->db = $link::get();
        $_POST = json_decode(file_get_contents('php://input'), true);
        $this->cors();
        if ($this->decode() === false) {
            switch ($action) {
                case 'delete':
                case 'add':
                case 'changeRoom':
                case 'update':
                case 'edit':
                    http_response_code(401);
                    exit;
            }
        }
    }

    public function __destruct()
    {
        echo json_encode($this->data);
    }

    public function all()
    {

        if ($this->verify($_GET['id']) === false) {
            http_response_code(400);
            return;
        }
        $id = (int) $_GET['id'];
        $sql = "SELECT sir_r_id FROM software_in_raum WHERE sir_k_id = ?;";
        $query = $this->db->prepare($sql);
        $result = $query->execute(array($id));
        if ($result === false) {
            http_response_code(500);
            return;
        }
        $i = 0;
        foreach ($query as $row) {
            $this->data[$i] = new stdClass();
            $this->data[$i]->sir_r_id = (string) $row['sir_r_id'];
            $i++;
        }
    }

    public function add()
    {
        if ($this->verify($_POST['component_id']) === false || $this->verify($_POST['room_id']) === false) {
            http_response_code(400);
            return;
        }
        $sir_k_id = (int) $_POST['component_id'];
        $sir_r_id = (int) $_POST['room_id'];
        $sql = "INSERT INTO software_in_raum (sir_k_id, sir_r_id) VALUES (?, ?);";
        $query = $this->db->prepare($sql);
        $result = $query->execute(array($sir_k_id, $sir_r_id));
        if ($result === false) {
            http_response_code(500);
            return;
        }
    }

    public function delete()
    {
        if ($this->verify($_GET['id']) === false) {
            http_response_code(400);
            return;
        }
        $id = (int) $_GET['id'];
        $sql = "DELETE FROM software_in_raum WHERE sir_k_id = ?;";
        $query = $this->db->prepare($sql);
        $result = $query->execute(array($id));
        if ($result === false) {
            http_response_code(500);
            return;
        }
    }

}
