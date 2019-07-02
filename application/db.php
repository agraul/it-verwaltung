<?php

class db
{

    public static $db;

    public function __construct()
    {
        self::$db = new PDO('mysql:host=127.0.0.1;dbname=it', 'root', "v_athe19!A_");
    }

    public static function get()
    {
        return self::$db;
    }

}
