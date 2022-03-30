<?php
namespace Api;

use Api\View;

class PlayerController extends Controller
{

    public function __construct($request = null)
    {
        if ($request != null && !empty($request)) {
            $this->request = $request;
        }
    }

    public function index()
    {
        $data = ['team' => 'player', 'scene' => 'office'];
        $view = new View();
        $view->render($data);

    }
}