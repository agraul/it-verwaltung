<?php

class component extends controller
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
    }

    public function __destruct()
    {
        echo json_encode($this->data);
    }

    public function all()
    {
    }

}
