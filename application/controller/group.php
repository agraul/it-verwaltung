<?php

class group extends controller
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

    public function add()
    {
        $this->data[0] = new stdClass();
        try {
            $bezeichnung = (string) $_POST['bezeichnung'];
            $priv = (int) $_POST['privilegiert'];
            $query = $this->db->prepare("INSERT INTO gruppe (g_bezeichnung, g_privilegiert) VALUES (?, ?);");
            $query->execute(array($bezeichnung, $priv));
            $this->data[0]->success = true;
        } catch (Exception $e) {
            $this->data[0]->success = false;
        }
    }

    public function all()
    {
        $query = $this->db->prepare("SELECT * FROM gruppe;");
        $query->execute();
        $i = 0;
        foreach ($query as $row) {
            $this->data[$i] = new stdClass();
            $this->data[$i]->id = (int) $row['g_id'];
            $this->data[$i]->bezeichnung = (string) $row['g_bezeichnung'];
            $this->data[$i]->priviligiert = (bool) $row['g_privilegiert'];
            $i++;
        }
    }

}
