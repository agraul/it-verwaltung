<?php

class skeleton extends controller
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
        }    }

    public function __destruct()
    {
        echo json_encode($this->data);
    }

    public function somefun()
    {
        // $this->data = [ (...) ];
    }

}
