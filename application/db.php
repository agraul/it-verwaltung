<?php

class db
{

    public static $db;

    public function __construct()
    {
        self::$db = new PDO('mysql:host=localhost;dbname=itv_v05', 'root', 'v_athe19!A_');
    }

    public static function get()
    {
        return self::$db;
    }

}
