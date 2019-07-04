<?php

class componentattribute extends controller
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
                case 'add':
                case 'delete':
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
        $this->data[0] = new stdClass();
        try {
            $query = $this->db->prepare("SELECT * from komponentenattribute;");
            $query->execute();
            $i = 0;
            foreach ($query as $row) {
                $this->data[$i] = new stdClass();
                $this->data[$i]->id = (int) $row['kat_id'];
                $this->data[$i]->bezeichnung = (string) $row['kat_bezeichnung'];
                $i++;
            }
            $this->data[0]->success = true;
        } catch (Exception $e) {
            $this->data[0]->success = false;
        }
    }

    public function add()
    {
        $this->data[0] = new stdClass();
        try {
            $attribute = (string) trim($_POST['attribute']);
            $query = $this->db->prepare("INSERT INTO komponentenattribute (kat_bezeichnung) VALUES (?);");
            $query->execute(array($attribute));
            $this->data[0]->success = true;
        } catch (Exception $e) {
            $this->data[0]->success = false;
        }
    }

    public function delete()
    {
        $this->data[0] = new stdClass();
        try {
            $id = (int) $_GET['id'];
            $sql = "DELETE FROM komponentenattribute WHERE kat_id=?";
            $query = $this->db->prepare($sql);
            $query->execute(array($id));
            $this->data[0]->success = true;
        } catch (Exception $e) {
            $this->data[0]->success = false;
        }
    }

}
