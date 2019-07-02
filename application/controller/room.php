<?php

class room extends controller
{

    public $request_method;
    public $data;
    public $param;

    public function __construct(string $request_method, $param)
    {
        $this->request_method = $request_method;
        header('Content-Type: application/json');
        $this->data = [];
        $this->param = $_GET;
    }

    public function __destruct()
    {
        echo json_encode($this->data);
    }

    public function all()
    {
        require '../db.php';
        $link = new db();
        $db = $link::get();
        $query = $db->prepare('SELECT * FROM raeume;');
        $query->execute();
        $i = 0;
        foreach ($query as $row) {
            $this->data[$i] = new stdClass();
            $this->data[$i]->id = (int) $row['r_id'];
            $this->data[$i]->nr = (int) $row['r_nr'];
            $this->data[$i]->bezeichnung = (string) $row['r_bezeichnung'];
            $this->data[$i]->hat_notiz = empty($row['r_bezeichnung']) ? false : true;

            $this->data[$i]->komponenten_arten = [];
            $q = $db->prepare("SELECT ka_komponentenart FROM komponentenarten INNER JOIN komponenten ON komponentenarten_ka_id = ka_id INNER JOIN raeume ON raeume_r_id = r_id WHERE r_id = ?;");
            $q->execute(array((int) $row['r_id']));
            $j = 0;
            foreach ($q as $r) {
                $this->data[$i]->komponenten_arten[$j] = $r['ka_komponentenart'];
                $j++;
            }
            $i++;
        }
    }

    public function detail()
    {
        $id = (int) $_GET['id'];
        require '../db.php';
        $link = new db();
        $db = $link::get();
        $query = $db->prepare('SELECT * FROM raeume WHERE r_id=?;');
        $query->execute(array($id));
        foreach ($query as $o) {
            $this->data[0] = new stdClass();
            $this->data[0]->id = (int) $o['r_id'];
            $this->data[0]->nr = (string) $o['r_nr'];
            $this->data[0]->bezeichnung = (string) $o['r_bezeichnung'];
            $this->data[0]->notiz = (string) $o['r_notiz'];
        }
        $this->data[1] = new stdClass();
        $this->data[1]->komponenten = [];
        $sql = "SELECT r_id, r_nr, r_bezeichnung, r_notiz, k_id, k_bezeichnung, k_hersteller, khkat_wert, ka_software FROM raeume INNER JOIN komponenten ON r_id = raeume_r_id INNER JOIN komponentenarten ON komponentenarten_ka_id = ka_id INNER JOIN komponente_hat_attribute ON k_id = komponenten_k_id INNER JOIN komponentenattribute ON komponentenattribute_kat_id = kat_id WHERE r_id = ? AND (kat_bezeichnung = 'Seriennummer' OR kat_bezeichnung = 'Versionsnummer');";
        $q = $db->prepare($sql);
        $q->execute(array($id));
        $i = 0;
        foreach ($q as $r) {
            $this->data[1]->komponenten[$i] = new stdClass();
            $this->data[1]->komponenten[$i]->id = (int) $r['k_id'];
            $this->data[1]->komponenten[$i]->bezeichnung = (string) $r['k_bezeichnung'];
            $this->data[1]->komponenten[$i]->hersteller = (string) $r['k_hersteller'];
            $this->data[1]->komponenten[$i]->serienundversionsnummer = (string) $r['khkat_wert'];
            $this->data[1]->komponenten[$i]->is_software = (bool) $r['ka_software'];
            $i++;
        }
    }

    public function push()
    {
        
    }

}
