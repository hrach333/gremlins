<?php
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
require_once __DIR__ . '/autoload/NamespaceAutoloader.php';

$autoloader = new NamespaceAutoloader();
$autoloader->addNamespace('App', __DIR__ );
$autoloader->addNamespace('Api', __DIR__ . '/api');
$autoloader->register();

define('FOLDER', '../images/Cards');
/* $cards = new Cards(FOLDER);

$cardsImages = $cards->scanFolder();

$json = json_encode($cardsImages);

echo $json; */
if (isset($_GET['r']) && !empty($_GET['r'])) {
    $request = $_GET['r'];
    $arrayRequest = explode('/', $request);
    $controller = $arrayRequest[0];
    $api = "Api\\";
    $controller = ucfirst($controller);
    $controller = $api.$controller.'Controller';
    $actin = $arrayRequest[1];
    $object = new $controller();
    $object->$actin();
}