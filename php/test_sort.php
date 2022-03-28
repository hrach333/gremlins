<?php
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
require_once __DIR__ . '/autoload/NamespaceAutoloader.php';

$autoloader = new NamespaceAutoloader();
$autoloader->addNamespace('App', __DIR__ );
$autoloader->register();

use App\Cards;
define('FOLDER', '../images/Cards');
$cards = new Cards(FOLDER);

$cardsImages = $cards->scanFolder();

$newCards = $cards->renameCards();

print_r($newCards);