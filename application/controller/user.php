<?php

class user extends controller
{

    public $request_method;
    public $data;

    public function __construct(string $request_method)
    {
        $this->request_method = $request_method;
        header('Content-Type: application/json');
    }

    public function __destruct()
    {
        echo json_encode($this->data);
    }

    public function setpassword()
    {
        $this->data = [
            'success' => false
        ];
    }

    public function login()
    {
        
    }

}
