<?php

abstract class controller
{

    abstract public function __destruct();

    public function verify($var): bool
    {
        $var = trim($var);
        if (is_null($var) === true) {
            return true;
        }
        if (isset($var) === false) {
            return false;
        }
        if ($var == "") {
            return false;
        }
        return true;
    }

    public function cors()
    {

        // Allow from any origin
        if (isset($_SERVER['HTTP_ORIGIN'])) {
            // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
            // you want to allow, and if so:
            header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
            header('Access-Control-Allow-Credentials: true');
            header('Access-Control-Max-Age: 86400');    // cache for 1 day
        }

        // Access-Control headers are received during OPTIONS requests
        if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

            if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            // may also be using PUT, PATCH, HEAD etc
                header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

            if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
                header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

            exit(0);
        }
    }

    public function decode(): bool
    {
        if (isset($_SERVER['HTTP_AUTHORIZATION']) === false) {
            http_response_code(401);
            exit;
        }
        $token = (string) $_SERVER['HTTP_AUTHORIZATION'];
        require '../php-jwt/JWT.php';
        try {
            $jwt = new Firebase\JWT\JWT();
            $e = $jwt->decode($token, KEY, $allowed_algs = [
                'HS256',
            ]);
            return $e->admin;
        } catch (Exception $e) {
            http_response_code(401);
            exit;
        }
        return false;
    }

}
