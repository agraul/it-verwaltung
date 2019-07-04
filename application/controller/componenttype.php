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
        $type = (string) $_POST['bezeichnung'];
        $is_software = (int) $_POST['is_software'];
        $attributes = (array) $_POST['attribute'];
        $sql = "INSERT INTO komponentenarten (ka_komponentenart, ka_software) VALUES (?, ?);";
        $query = $this->db->prepare($sql);
        $result = $query->execute(array($type, $is_software));
        if ($result != true) {
          $this->data[0]->success = $result;
        }
        else {
          $response = $this->db->query('SELECT LAST_INSERT_ID();');
          foreach ($response as $r) {
            $letzte_id = $r['LAST_INSERT_ID()'];
          }
          $this->addAttributesToType($letzte_id, $attributes);
        }


        $this->data[0]->success = $result;
    }

    public function update()
    {
        $this->data[0] = new stdClass();
        $this->data[0]->success = true;
        $id = (int) $_POST['id'];
        $type = (string) $_POST['bezeichnung'];
        $is_software = (int) $_POST['is_software'];
        $attributes = (array) $_POST['attribute'];

        // update type table entries
        $sql1 = "UPDATE komponentenarten SET ka_komponentenart = ?, ka_software = ? WHERE ka_id = ?";
        $query1 = $this->db->prepare($sql1);
        $result1 = $query1->execute(array($type, $is_software, $id));
        if ($result1 != true) {
          $this->data[0]->success = $result1;
        }
        else {
          // drop type <-> attribute entries
          $sql2 = "DELETE FROM wird_beschrieben_durch where komponentenarten_ka_id = ?";
          $query2 = $this->db->prepare($sql2);
          $result2 = $query2->execute(array($id));
          if ($result2 != true) {
            $this->data[0]->success = $result2;
          }
          else {
            // re-add new type <-> attribute entries
            $this->addAttributesToType($id, $attributes);
          }
        }
    }

    private function addAttributesToType($type_id, $attributes) {
        $sql = "INSERT INTO wird_beschrieben_durch (komponentenarten_ka_id, komponentenattribute_kat_id) VALUES (?, ?);";
        $query = $this->db->prepare($sql);
        foreach ($attributes as $attribute) {
          $id = (int) $attribute['id'];
          $result = $query->execute(array($type_id, $id));
          if ($result != true) {
            $this->data[0]->success = false;
          }
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


}
