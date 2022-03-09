let negative = false;
let positive = true;
let staples = "'";
let arrayPoints = {7:[170, -945],
                    6:[255, -985], 5:[345, -1020], 
                    4:[450, -1000], 3:[530, -940], 
                    2:[550, -845], 1: [540, -745]};
function moove()
{
    $('.square-limit').animate({'marginTop':'-797px', 'marginLeft': '210px'}, 700)
}

function initPoints()
{
    let i = 1;
    for (let point in arrayPoints){
        console.log(arrayPoints[point])
        let left = arrayPoints[point][0];
        let top = arrayPoints[point][1];
        $('.cont-field').append('<div class="points" id="minus' + i +'" onclick="getPoint('+left +','+ top +' , positive,' + staples + 'minus'+ i + staples +')" style="margin-left: '+ left +'px; margin-top: '+top+'px;"></div>')
    }
    i++;
    /* $('.cont-field').append('<div class="points" id="minus6" onclick="getPoint(255, -1020, positive,' + staples + 'minus6' + staples +')" style="margin-left: 255px; margin-top: -980px;"></div>');
    $('.cont-field').append('<div class="points" id="minus5" onclick="getPoint(345, -1060, positive,' + staples + 'minus5' + staples +')" style="margin-left: 345px; margin-top: -1020px;"></div>');
    $('.cont-field').append('<div class="points" id="minus4" style="margin-left: 255px; margin-top: -210px;"></div>');
    $('.cont-field').append('<div class="points" id="minus3" style="margin-left: 255px; margin-top: -210px;"></div>'); */
}

function getPoint(left, top, motion, txtId)
{
    let id = txtId.replace(/minus/g, '');
    let idFind;
    console.log(id);
    let mrgLeft = $('#' + txtId).css('marginLeft').replace(/px/g, '');
    let mrgTop = $('#' + txtId).css('marginTop').replace(/px/g, '');
    let i = 1;
    for (let point in arrayPoints) {
        let leftin = arrayPoints[point][0];
        let topin = arrayPoints[point][1];
        if (leftin == left && topin == top) {
            idFind = i;
        }
        i++;
    }
    if (idFind > id ) {
        while (id <= idFind) {
            
            let newLeft = arrayPoints[id][0];
            let newTop = arrayPoints[id][1];
            $('.square-limit').animate({'marginTop':newTop + 'px', 'marginLeft': newLeft + 'px'}, 700);
            id++;
        }
    } else {
        $('.square-limit').animate({'marginTop':top + 'px', 'marginLeft': left + 'px'}, 700);
    }
    
}

function start()
{
    initPoints();
}