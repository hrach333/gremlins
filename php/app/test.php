<?php
$a = 3;
$b = 2;
$c = 5;
$d = 4;

function findMax($a, $b, $c, $d)
{
    if ($a > $b){
        if ($a > $c) {
            if ($a > $d) {
                echo "Max a";
            } else{
                echo "Max d";
            }
        } elseif($c > $d) {
            echo "Max c";
        } else {
            echo "Max d";
        }
    } else {
        if ($b > $c) {
            if ($b > $d) {
                echo "Max b";
            }
        } else {
            if ($c > $d) {
                echo "Max c";
            } else {
                echo "Max d";
            }
        }
    }
}