<?php
namespace App;
class Cards 
{
    private $pathCardsImages = '';
    private $cardsImages = array();
    private $newCardsImages = array();

    public function __construct($folder)
    {
        $this->pathCardsImages = $folder;
    }

    public function scanFolder()
    {
        $this->cardsImages = scandir($this->pathCardsImages);
        foreach($this->cardsImages as $cardImage){
            if ($cardImage != '' && $cardImage != '.' && $cardImage != '..')
            {
                $this->newCardsImages[] = $cardImage;
            }
        }
        return $this->newCardsImages;
    }

}