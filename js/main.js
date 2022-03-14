let negative = false;
let positive = true;
let staples = "'";
let localPoint = 3;
let arrayPoints = {
                    21:[400, -420, 'main'], 22:[475, -400, 'main'],
                    23:[430, -335, 'secondary'], 24:[430, -260, 'secondary'],
                    25:[525, -310, 'secondary'], 26:[550, -405, 'main'],
                    27:[630, -405, 'secondary'], 28:[640, -480, 'secondary'],
                    29:[695, -550, 'secondary'], 30:[740, -470, 'secondary'],
                    31:[715, -390, 'main'], 32:[790, -365, 'main'],
                    13:[223, -622, 'secondary'], 14:[135, -580, 'secondary'],
                    15:[220, -550, 'secondary'], 16:[295, -535, 'main'],
                    17:[340, -470, 'main'], 18:[295, -400, 'secondary'],
                    19:[240, -335, 'secondary'], 20:[345, -345, 'secondary'],
                    12: [310, -615, 'main'], 11: [384, -665, 'main'],
                    10:[290, -690, 'secondary'], 9:[215, -750, 'secondary'],
                    8:[180, -835, 'secondary'], 7:[170, -945, 'secondary'],
                    6:[255, -985, 'secondary'], 5:[345, -1020, 'secondary'],
                    4:[450, -1000, 'secondary'], 3:[530, -940, 'secondary'],
                    2:[550, -845, 'secondary'], 1: [540, -745, 'secondary']
                };
function moove()
{
    $('.square-limit').animate({'marginTop':'-797px', 'marginLeft': '210px'}, 700)
}

function initPoints()
{
    let i = 1;
    for (let point in arrayPoints){
        let left = arrayPoints[point][0];
        let top = arrayPoints[point][1];
        $('.cont-field').append('<div class="points" id="minus' + i +'" onclick="goPoint('+left +','+ top +' , positive,' + staples + 'minus'+ i + staples +')" style="margin-left: '+ left +'px; margin-top: '+top+'px;"></div>');
        i++;
    }
    
    /* $('.cont-field').append('<div class="points" id="minus6" onclick="getPoint(255, -1020, positive,' + staples + 'minus6' + staples +')" style="margin-left: 255px; margin-top: -980px;"></div>');
    $('.cont-field').append('<div class="points" id="minus5" onclick="getPoint(345, -1060, positive,' + staples + 'minus5' + staples +')" style="margin-left: 345px; margin-top: -1020px;"></div>');
    $('.cont-field').append('<div class="points" id="minus4" style="margin-left: 255px; margin-top: -210px;"></div>');
    $('.cont-field').append('<div class="points" id="minus3" style="margin-left: 255px; margin-top: -210px;"></div>'); */
}

function goPoint(left, top, motion, txtId)
{
    let id = txtId.replace(/minus/g, '');

    let mrgLeft = $('#' + txtId).css('marginLeft').replace(/px/g, '');
    let mrgTop = $('#' + txtId).css('marginTop').replace(/px/g, '');
    let i = 1;
    console.log('id ' + id + ' localPoint ' + localPoint + '');
    if (localPoint > id && motion == false) {
        while (id <= localPoint) {
            
            let newLeft = arrayPoints[idFind][0];
            let newTop = arrayPoints[idFind][1];
            $('.square-limit').animate({'marginTop':newTop + 'px', 'marginLeft': newLeft + 'px'}, 700);
            localPoint--;
        }
    } else if (localPoint < id && motion == true) {
        while (localPoint < id ) {
            localPoint++;
            let newLeft = arrayPoints[localPoint][0];
            let newTop = arrayPoints[localPoint][1];
            $('.square-limit').animate({'marginTop':newTop + 'px', 'marginLeft': newLeft + 'px'}, 700);
            
        }
        
    }
    
}

function start()
{
    initPoints();
}