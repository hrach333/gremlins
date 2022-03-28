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
        foreach ($this->cardsImages as $cardImage) {
            if ($cardImage != '' && $cardImage != '.' && $cardImage != '..') {
                $this->newCardsImages[] = $cardImage;
            }
        }
        return $this->newCardsImages;
    }

    public function renameCards()
    {
        if (!empty($this->newCardsImages)) {
            $startNumper = 1;
            $newRenameCards = array();
            foreach ($this->newCardsImages as $cardImage) {
                $nameCard = preg_replace('/\d/', '', $cardImage);
                if ($startNumper <= 9) $card = preg_replace('/\./', '_00' . $startNumper.'.', $nameCard);
                if ($startNumper > 9 && $startNumper <= 99) $card = preg_replace('/\./', '_0' . $startNumper.'.', $nameCard);
                if ($startNumper > 99) $card = preg_replace('/\./', '_' . $startNumper.'.', $nameCard);
                rename($this->pathCardsImages.'/'.$this->newCardsImages[$startNumper - 1], $this->pathCardsImages.'/'.$card);
                $newRenameCards[] = $card;
                $startNumper++;
            }
            return $newRenameCards;
        } else {
            return null;
        }
    }
}
