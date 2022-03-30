<?php

namespace Api;

class View
{
    public function __construct()
    {
    }

    public function render($data)
    {
        if (is_array($data)) {
            echo json_encode($data);
        } elseif (!empty($data)) {
            echo $data;
        } else {
            echo 'error';
        }
    }
}
