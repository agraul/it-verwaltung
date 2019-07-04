<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

define('KEY', 'hgEKTTuuKYhMpwiIvfLiskiMhQNgSERz');

$request_uri = (string) $_SERVER['REQUEST_URI'];
if ($request_uri === '/index.php') {
    $request_uri = '/';
}

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
}

$directRoutingFileextension = [
    '.js',
    '.js.map',
    '.ico',
];

$route = route($request_uri, $routes);
if (empty($route) === true) {
    chdir('build');
    if (strpos($request_uri, '.') !== false) {
        $fileExtension = substr($request_uri, strpos($request_uri, '.'));
        foreach ($directRoutingFileextension as $ext) {
            if ($ext === $fileExtension) {
                $filename = substr($request_uri, 0, strpos($request_uri, '.'));
                if (substr($filename, 0, 1) === '/') {
                    $filename = substr($filename, 1);
                }
                require $filename . $fileExtension;
                return;
            }
        }
    } else {
        require 'index.html';
        return;
    }
    return;
}

chdir('../application/controller');
require 'controller.php';
require $route['controller'] . '.php';
$param = $_REQUEST;
$controller = new $route['controller']($route['action']);
$action = $route['action'];
$controller->$action();

