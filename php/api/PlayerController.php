<?php
namespace Api;

use Api\View;

class PlayerController extends Controller
{
    private $players = [
    ['idPlayer' => 1, 'name' => 'Trus'],
    ['idPlayer' => 2, 'name' => 'Boris'],
    ['idPlayer' => 3, 'name' => 'Vor']];

    private View $view;
    public function __construct($request = null)
    {
        if ($request != null && !empty($request)) {
            $this->request = $request;
        }
        $this->view = new View();
    }

    public function index()
    {
        $data = ['team' => 'player', 'scene' => 'office'];
        $this->view->render($data);

    }
    public function getPlayers($id = null)
    {
        if ($id != null) {
            $this->view->render($this->players[$id]);
        } else {
            $this->view->render($this->players);
        }
        
    }
}