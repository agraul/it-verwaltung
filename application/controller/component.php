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
        $_POST = json_decode(file_get_contents('php://input'), true);
        $this->cors();
    }

    public function __destruct()
    {
        echo json_encode($this->data);
    }

    public function all()
    {
        $sql_1 = "SELECT k_id, k_bezeichnung, raeume_r_id, lieferant_l_id, k_einkaufsdatum, k_gewaehrleistungsdauer, k_notiz, k_hersteller, k_beleg_id, komponentenarten_ka_id FROM komponenten;";
        $query1 = $this->db->prepare($sql_1);
        $query1->execute();
        $sql_2 = "SELECT komponenten_k_id, komponentenattribute_kat_id, khkat_wert FROM komponente_hat_attribute WHERE komponenten_k_id=?;";
        $query2 = $this->db->prepare($sql_2);
        $i = 0;
        foreach ($query1 as $row) {
            $this->data[$i] = new stdClass();
            $this->data[$i]->id = (int) $row['k_id'];
            $this->data[$i]->bezeichnung = (string) $row['k_bezeichnung'];
            $this->data[$i]->raeume_id = (int) $row['raeume_r_id'];
            $this->data[$i]->lieferant_id = (int) $row['lieferant_l_id'];
            $this->data[$i]->einkaufsdatum = (string) $row['k_einkaufsdatum'];
            $this->data[$i]->gewaehrleistungsdauer = (int) $row['k_gewaehrleistungsdauer'];
            $this->data[$i]->notiz = (string) $row['k_notiz'];
            $this->data[$i]->hersteller = (string) $row['k_hersteller'];
            $this->data[$i]->beleg_id = (int) $row['k_beleg_id'];
            $this->data[$i]->komponentenartenid = (int) $row['komponentenarten_ka_id'];
            $query2->execute(array($this->data[$i]->id));
            $j = 0;
            $this->data[$i]->attribute = [];
            foreach ($query2 as $r) {
                $this->data[$i]->attribute[$j] = new stdClass();
                $this->data[$i]->attribute[$j]->id = (int) $r['komponentenattribute_kat_id'];
                $this->data[$i]->attribute[$j]->value = (string) $r['khkat_wert'];
                $j++;
            }
            $i++;
        }
    }

    public function delete()
    {
        if ($this->verify($_GET['id']) === false) {
            http_response_code(400);
            return;
        }
        $id = (int) $_GET['id'];
        $sql = "DELETE FROM komponenten WHERE k_id = ?;";
        $query = $this->db->prepare($sql);
        $result = $query->execute(array($id));
        if ($result === false) {
            http_response_code(500);
            return;
        }
    }

    public function add()
    {
        $this->data[0] = new stdClass();
        $bezeichnung = (string) $_POST['bezeichnung'];
        $raum_id = (int) $_POST['raeume_id'];
        $lieferant_id = (int) $_POST['lieferant_id'];
        $einkaufsdatum = (string) $_POST['einkaufsdatum'];
        $warranty = (int) $_POST['gewaehrleistungsdauer'];
        $notiz = (string) $_POST['notiz'];
        $hersteller = (string) $_POST['hersteller'];
        $beleg_id = (int) $_POST['beleg_id'];
        $komponentenartenid = (int) $_POST['komponentenartenid'];
        $attributes = (array) $_POST['attribute'];

        $sql = "INSERT INTO komponenten (k_bezeichnung, raeume_r_id,
        lieferant_l_id, k_einkaufsdatum, k_gewaehrleistungsdauer, k_notiz,
        k_hersteller, k_beleg_id, komponentenarten_ka_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?,?);";
        $query = $this->db->prepare($sql);
        $result = $query->execute(array($bezeichnung, $raum_id, $lieferant_id,
                                        $einkaufsdatum, $warranty, $notiz,
                                        $hersteller, $beleg_id,
                                        $komponentenartenid));
        if ($result != true) {
          $this->data[0]->success = $result;
          $this->data[1] = 'Insert into komponenten';
        }
        else {
          $response = $this->db->query('SELECT LAST_INSERT_ID();');
          foreach ($response as $r) {
            $letzte_id = $r['LAST_INSERT_ID()'];
          }
          $this->addAttributesToComponent($letzte_id, $attributes);
        }


        $this->data[0]->id = $letzte_id;
        $this->data[0]->success = $result;
    }

    public function update()
    {
        $this->data[0] = new stdClass();
        $this->data[0]->success = true;
        $id = (int) $_POST['id'];
        $bezeichnung = (string) $_POST['bezeichnung'];
        $raum_id = (int) $_POST['raeume_id'];
        $lieferant_id = (int) $_POST['lieferant_id'];
        $einkaufsdatum = (string) $_POST['einkaufsdatum'];
        $warranty = (int) $_POST['gewaehrleistungsdauer'];
        $notiz = (string) $_POST['notiz'];
        $hersteller = (string) $_POST['hersteller'];
        $beleg_id = (int) $_POST['beleg_id'];
        $komponentenartenid = (int) $_POST['komponentenartenid'];
        $attributes = (array) $_POST['attribute'];

        // update type table entries
        $sql1 = "UPDATE komponenten SET k_bezeichnung = ?, raeume_r_id = ?, lieferant_l_id = ?, k_einkaufsdatum = ?, k_gewaehrleistungsdauer = ?, k_notiz = ?, k_hersteller = ?, k_beleg_id = ?, komponentenarten_ka_id = ? WHERE k_id = ?;";
        $query1 = $this->db->prepare($sql1);
        $result1 = $query1->execute(array($bezeichnung, $raum_id, $lieferant_id,
                                         $einkaufsdatum, $warranty, $notiz,
                                         $hersteller, $beleg_id,
                                         $komponentenartenid, $id));
        if ($result1 != true) {
          $this->data[0]->success = $result1;
        }
        else {
          // drop type <-> attribute entries
          $sql2 = "DELETE FROM komponente_hat_attribute WHERE komponenten_k_id = ?";
          $query2 = $this->db->prepare($sql2);
          $result2 = $query2->execute(array($id));
          if ($result2 != true) {
            $this->data[0]->success = $result2;
          }
          else {
            // re-add new type <-> attribute entries
            $this->addAttributesToComponent($id, $attributes);
          }
        }
    }

    private function addAttributesToComponent($component_id, $attributes) {
        $sql = "INSERT INTO komponente_hat_attribute (komponenten_k_id,
        komponentenattribute_kat_id, khkat_wert) VALUES (?, ?, ?);";
        $query = $this->db->prepare($sql);
        foreach ($attributes as $attribute) {
          $id = (int) $attribute['id'];
          $wert = (string) $attribute['value'];
          $result = $query->execute(array($component_id, $id, $wert));
          if ($result != true) {
            $this->data[0]->success = false;
          }
        }
    }

}
