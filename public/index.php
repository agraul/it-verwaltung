<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$request_uri = (string) $_SERVER['REQUEST_URI'];
$request_method = (string) $_SERVER['REQUEST_METHOD'];

if ($request_method === '/') :
    chdir('build');
    require 'index.html';
else:

    $base = '/api/v1';
    require 'routes.php';

    // Remove $base
    if (substr($request_uri, 0, strlen($base)) === $base) {
        $request_uri = substr($request_uri, strlen($base));
    }

    function route(string $request_uri, array $routes): array
    {
        if (strpos($request_uri, '?') !== false) {
            $questionmarkPos = strpos($request_uri, '?');
            $request_uri = substr($request_uri, 0, $questionmarkPos);
        }
        foreach ($routes as $route) {
            if ($route['route'] === $request_uri) {
                return $route;
            }
        }
        return [];
        // @TODO error, no route found
    }

    $route = route($request_uri, $routes);
    chdir('../application/controller');
    require 'controller.php';
    require $route['controller'] . '.php';
    $param = $_REQUEST;
    $controller = new $route['controller']($request_method, $param);
    $action = $route['action'];
    $controller->$action();

endif;