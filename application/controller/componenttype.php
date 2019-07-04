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
        $this->cors();
    }

    public function __destruct()
    {
        echo json_encode($this->data);
    }

    public function all()
    {
        $sql_1 = "SELECT ka_id, ka_komponentenart, ka_software FROM komponentenarten;";
        $query1 = $this->db->prepare($sql_1);
        $query1->execute();
        $sql2 = "SELECT kat_id, kat_bezeichnung, komponentenarten_ka_id FROM komponentenattribute INNER JOIN wird_beschrieben_durch ON kat_id = komponentenattribute_kat_id WHERE komponentenarten_ka_id=?;";
        $query2 = $this->db->prepare($sql2);
        $i = 0;
        foreach ($query1 as $row) {
            $this->data[$i] = new stdClass();
            $this->data[$i]->id = (int) $row['ka_id'];
            $this->data[$i]->bezeichnung = (string) $row['ka_komponentenart'];
            $this->data[$i]->is_software = (bool) $row['ka_software'];
            $this->data[$i]->attribute = [];
            $query2->execute(array($row['ka_id']));
            $j = 0;
            foreach ($query2 as $r) {
                $this->data[$i]->attribute[$j] = new stdClass();
                $this->data[$i]->attribute[$j]->id = (int) $r['kat_id'];
                $this->data[$i]->attribute[$j]->bezeichnung = (string) $r['kat_bezeichnung'];
                $j++;
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
            $id = (int) $_GET['id'];
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
