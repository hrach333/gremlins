<?php
namespace Api;

class Controller
{
    private $request;

    public function __construct()
    {
        
    }
    public function getData()
    {
        if (isset($_POST['data'])) {
            $data = $_POST['data'];
            $data = json_encode($data);
            return $data;
        } else {
            return null;
        }
    }
}
