<?php
namespace Api;

class Cards
{
    private $pathCardsImages = '';
    private $cardsImages = array();
    private $newCardsImages = array();
    private $players;
    public function __construct($folder)
    {
        $this->pathCardsImages = $folder;
        $this->players =  new PlayerController();
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
                //rename($this->pathCardsImages.'/'.$this->newCardsImages[$startNumper - 1], $this->pathCardsImages.'/'.$card);
                $newRenameCards[] = $card;
                $startNumper++;
            }
            return $newRenameCards;
        } else {
            return null;
        }
    }
    private function movingResource($resurs, $playerOne, $playerTwo, $num)
    {
        switch ($resurs){
            case 'cost' :
                $idResurs = 0;
                break;
            case 'vote' :
                $idResurs = 1;
                break;
            case 'malicious' :
                $idResurs = 2;
                break;
            case 'gears' :
                $idResurs = 3;
                break;
            default :
                $idResurs = false;

        }
        $resursPlayers = $players->getResursPlayers();
        $numResursPlayerOne = $resursPlayers[$playerOne][$idResurs];
        $numResursPlayerTwo = $resursPlayers[$playerTwo][$idResurs];
        $newResursPlayerOne = $numResursPlayerOne - $num;
        $newResursPlayerTwo = $numResursPlayerTwo + $num;
        $resursPlayers[$playerOne][$idResurs] = $newResursPlayerOne;
        $resursPlayers[$playerTwo][$idResurs] = $newResursPlayerTwo;
    }
    public function actionCard($action)
    {
        if (isset($_POST['resurs'])) {
            $resurs = $_POST['resurs'];
        }
        if ($action = 'getGearsFromPlayer') {
            $this->movingResource();
        }
    }
}
