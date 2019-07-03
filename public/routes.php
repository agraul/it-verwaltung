<?php
return $routes = [
    [
        'route' => '/room/all',
        'controller' => 'room',
        'action' => 'all',
    ],
    [
        'route' => '/room/detail',
        'controller' => 'room',
        'action' => 'detail',
    ],
    [
        'route' => '/room/push',
        'controller' => 'room',
        'action' => 'push',
    ],
    [
        'route' => '/group/add',
        'controller' => 'group',
        'action' => 'add ',
    ],
    [
        'route' => '/group/all',
        'controller' => 'group',
        'action' => 'all',
    ],
    [
        'route' => '/user/setpassword',
        'controller' => 'user',
        'action' => 'setpassword',
    ],
    [
        'route' => '/user/all',
        'controller' => 'user',
        'action' => 'all',
    ],
    [
        'route' => '/user/register',
        'controller' => 'user',
        'action' => 'register',
    ],
        [
        'route' => '/user/delete',
        'controller' => 'user',
        'action' => 'delete',
    ],
];

