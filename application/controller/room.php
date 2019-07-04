<?php

class room extends controller
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
        $query = $this->db->prepare('SELECT * FROM raeume;');
        $query->execute();
        $i = 0;
        foreach ($query as $row) {
            $this->data[$i] = new stdClass();
            $this->data[$i]->id = (int) $row['r_id'];
            $this->data[$i]->nr = (string) $row['r_nr'];
            $this->data[$i]->bezeichnung = (string) $row['r_bezeichnung'];
            $this->data[$i]->hat_notiz = empty($row['r_bezeichnung']) ? false : true;
            $this->data[$i]->komponenten_arten = [];
            $q = $this->db->prepare("SELECT ka_komponentenart FROM komponentenarten INNER JOIN komponenten ON komponentenarten_ka_id = ka_id INNER JOIN raeume ON raeume_r_id = r_id WHERE r_id = ?;");
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
        $query = $this->db->prepare('SELECT * FROM raeume WHERE r_id=?;');
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
        $q = $this->db->prepare($sql);
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

    public function add()
    {
        if ($this->verify($_POST['nr']) === false || $this->verify($_POST['bezeichnung']) === false) {
            http_response_code(400);
            return;
        }
        $nr = (string) $_POST['nr'];
        $bezeichnung = (string) $_POST['bezeichnung'];
        $notiz = (string) $_POST['notiz'];

        $sql = "INSERT INTO raeume (r_nr, r_bezeichnung, r_notiz) VALUES (?, ?, ?);";
        $query = $this->db->prepare($sql);
        $result = $query->execute(array($nr, $bezeichnung, $notiz));
        if ($result === false) {
            http_response_code(500);
            return;
        }
    }

    public function delete()
    {
        if ($this->verify($_GET['id']) === false) {
            http_response_code(400);
            return;
        }
        $id = (int) $_GET['id'];
        $sql = "DELETE FROM raeume WHERE r_id = ?;";
        $query = $this->db->prepare($sql);
        $result = $query->execute(array($id));
        if ($result === false) {
            http_response_code(500);
            return;
        }
    }

    public function edit()
    {
        if ($this->verify($_POST['id']) === false || $this->verify($_POST['nr']) === false || $this->verify($_POST['bezeichnung']) === false) {
            http_response_code(400);
            return;
        }
        $id = (int) $_POST['id'];
        $nr = (string) $_POST['nr'];
        $bezeichnung = (string) $_POST['bezeichnung'];
        $sql = "UPDATE raeume SET r_nr = ?,  r_bezeichnung = ? WHERE r_id = ?;";
        $query = $this->db->prepare($sql);
        $result = $query->execute(array($nr, $bezeichnung, $id));
        if ($result === false) {
            http_response_code(500);
            return;
        }
    }

    public function note()
    {
        if ($this->verify($_POST['id']) === false || $this->verify($_POST['notiz']) === false) {
            http_response_code(400);
            return;
        }
        $id = (int) $_POST['id'];
        $note = (string) $_POST['notiz'];
        $sql = "UPDATE raeume SET r_notiz = ? WHERE r_id = ?;";
        $query = $this->db->prepare($sql);
        $result = $query->execute(array($note, $id));
        if ($result === false) {
            http_response_code(500);
            return;
        }
    }

}
