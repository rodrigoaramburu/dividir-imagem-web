<?php
require __DIR__ . '/../vendor/autoload.php';

use Slim\Factory\AppFactory;
use Slim\Views\Twig;
use Slim\Views\TwigMiddleware;

// Create App
$app = AppFactory::create();

// Create Twig
$twig = Twig::create(__DIR__ . '/../src/templates', ['cache' => false]);
$app->add(TwigMiddleware::create($app, $twig));

// Define named route for home
$homeController = new \App\Controller\HomeController($twig);
$app->get('/', [$homeController, 'index']);

// Run app
$app->run();
