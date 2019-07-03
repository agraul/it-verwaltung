<?php

class componenttype extends controller
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
    }

    public function __destruct()
    {
        echo json_encode($this->data);
    }

    public function all()
    {
        // SELECT ka_id, ka_komponentenart, ka_software FROM komponentenarten;
        $sql1 = "SELECT ka_id, ka_komponentenart, ka_software FROM komponentenarten;";
        $query = $this->db->prepare($sql);
        $query->execute();
        $i = 0;
        foreach ($query as $row) {
            var_dump($row);
            /*
              "attribute": [
              {
              "id": 0,
              "bezeichnung": "string"
              }
             *              */
            $this->data[$i] = new stdClass();
            $this->data[$i]->id = (int) $row['ka_id'];
            $this->data[$i]->bezeichnung = (string) $row['ka_komponentenart'];
            $this->data[$i]->is_software = (bool) $row['ka_software'];
            $this->data[$i]->attribute = [];
            $j = 0;

            foreach ($row as $z) {
                
            }
            $i++;
        }
    }

    public function add()
    {
        $this->data[0] = new stdClass();
        try {
            $type = (string) $_POST['componenttype'];
            $is_software = (int) $_POST['is_software'];
            $sql = "INSERT INTO komponentenarten (ka_komponentenart, ka_software) VALUES (?, ?);";
            $query = $this->db->prepare($sql);
            $query->execute(array($type, $is_software));
            $this->data[0]->success = true;
        } catch (Exception $e) {
            $this->data[0]->success = false;
        }
    }

    public function delete()
    {
        $this->data[0] = new stdClass();
        try {
            $id = (int) $_POST['id'];
            $sql = "DELETE FROM komponentenarten WHERE ka_id=?;";
            $query = $this->db->prepare($sql);
            $query->execute(array($id));
            $this->data[0]->success = true;
        } catch (Exception $e) {
            $this->data[0]->success = false;
        }
    }

    public function addAttribute()
    {
        $this->data[0] = new stdClass();
        try {
            $artId = (int) $_POST['komponentenart_id'];
            $attributeId = (int) $_POST['komponentenattribute_id'];
            $sql = "INSERT INTO wird_beschrieben_durch (komponentenarten_ka_id, komponentenattribute_kat_id) VALUES (?, ?);";
            $query = $this->db->prepare($sql);
            $query->execute(array($artId, $attributeId));
            $this->data[0]->success = true;
        } catch (Exception $e) {
            $this->data[0]->success = false;
        }
    }

}
