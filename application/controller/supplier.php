<?php

class supplier extends controller
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
        #   $_POST = json_decode(file_get_contents('php://input'), true);
        $this->cors();
    }

    public function __destruct()
    {
        echo json_encode($this->data);
    }

    public function all()
    {
        $query = $this->db->prepare("SELECT * FROM lieferant");
        $query->execute();
        $i = 0;
        foreach ($query as $row) {
            $this->data[$i] = new stdClass();
            $this->data[$i]->id = (int) $row['l_id'];
            $this->data[$i]->companyname = (string) $row['l_firmenname'];
            $this->data[$i]->street = (string) $row['l_strasse'];
            $this->data[$i]->plz = (string) $row['l_plz'];
            $this->data[$i]->place = (string) $row['l_ort'];
            $this->data[$i]->tel = (string) $row['l_tel'];
            $this->data[$i]->mobile = (string) $row['l_mobil'];
            $this->data[$i]->fax = (string) $row['l_fax'];
            $this->data[$i]->email = (string) $row['l_email'];
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
        $query = $this->db->prepare("DELETE FROM lieferant WHERE l_id=?;");
        $result = $query->execute(array($id));
        if ($result === false) {
            http_response_code(500);
            return;
        }
    }

    private function checkAddParameter($arr): bool
    {
        switch (false) {
            case $this->verify($arr['companyname']):
            case $this->verify($arr['street']):
            case $this->verify($arr['plz']):
            case $this->verify($arr['place']):
            case $this->verify($arr['tel']):
            case $this->verify($arr['mobile']):
            case $this->verify($arr['fax']):
            case $this->verify($arr['email']):
                return false;
        }
        return true;
    }

    public function add()
    {
        if ($this->checkAddParameter($_POST) === false) {
            http_response_code(400);
            return;
        }
        $companyname = (string) $_POST['companyname'];
        $street = (string) $_POST['street'];
        $plz = (string) $_POST['plz'];
        $place = (string) $_POST['place'];
        $tel = (string) $_POST['tel'];
        $mobile = (string) $_POST['mobile'];
        $fax = (string) $_POST['fax'];
        $email = (string) $_POST['email'];
        $sql = "INSERT INTO lieferant (l_firmenname, l_strasse, l_plz, l_ort, l_tel, l_mobil, l_fax, l_email) VALUES (?, ?, ?, ?, ?, ?, ?, ?);";
        $query = $this->db->prepare($sql);
        $result = $query->execute(array($companyname, $street, $plz, $place, $tel, $mobile, $fax, $email));
        if ($result === false) {
            http_response_code(500);
            return;
        }
    }

}
