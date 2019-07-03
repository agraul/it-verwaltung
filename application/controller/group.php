<?php

class group extends controller
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

    public function add()
    {
        $bezeichnung = (string) $_POST['bezeichnung'];
        $priv = (string) $_POST['priviligiert'];
        require '../db.php';
        $link = new db();
        $db = $link::get();
        $query = $db->prepare("INSERT INTO gruppe (g_bezeichnung, g_priviligiert) VALUES ('?', '?');");
        $query->execute(array($bezeichnung, $priv));
        
        
    }

    public function all()
    {
        require '../db.php';
        $link = new db();
        $db = $link::get();
        $query = $db->prepare("SELECT * FROM gruppe;");
        $query->execute();
        $i = 0;
        foreach ($query as $row) {
            $this->data[$i] = new stdClass();
            $this->data[$i]->id = (int) $row['g_id'];
            $this->data[$i]->bezeichnung = (string) $row['g_bezeichnung'];
            $this->data[$i]->priviligiert = (bool) $row['g_priviligiert'];
            $i++;
        }
    }

}
