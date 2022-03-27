<?php

require_once __DIR__ . '/autoload/NamespaceAutoloader.php';

$autoloader = new NamespaceAutoloader();
$autoloader->addNamespace('App', __DIR__ );
$autoloader->register();

use App\Cards;

$cards = new Cards();

$cards->test();