let negative = false;
let positive = true;
let staples = "'";
let localPoint = 11;
let status = false;
let clickCard = false;
let clickPoint = false;
let globalLimit = 0;
let globalId = 0;
let dataImages;
let steps = 0;
let arrayPoints = {
    21: [400, -420, 'main'], 22: [475, -400, 'main'],
    23: [430, -335, 'secondary'], 24: [430, -260, 'secondary'],
    25: [525, -310, 'secondary'], 26: [550, -405, 'main'],
    27: [630, -405, 'main'], 28: [640, -480, 'secondary'],
    29: [695, -550, 'secondary'], 30: [740, -470, 'secondary'],
    31: [715, -390, 'main'], 32: [790, -365, 'main'],
    13: [223, -622, 'secondary'], 14: [135, -580, 'secondary'],
    15: [220, -550, 'secondary'], 16: [295, -535, 'main'],
    17: [340, -470, 'main'], 18: [295, -400, 'secondary'],
    19: [240, -335, 'secondary'], 20: [345, -345, 'secondary'],
    12: [310, -615, 'main'], 11: [384, -665, 'main'],
    10: [290, -690, 'secondary'], 9: [215, -750, 'secondary'],
    8: [180, -835, 'secondary'], 7: [170, -945, 'secondary'],
    6: [255, -985, 'secondary'], 5: [345, -1020, 'secondary'],
    4: [450, -1000, 'secondary'], 3: [530, -940, 'secondary'],
    2: [550, -845, 'secondary'], 1: [540, -745, 'secondary']
};
//vote голос
//cost деньги
//malignancy
//gear шестерня основной ресурс
let dataCards = [
    [3, 'Ofise',{'cost': 50}, {'vote' : 3}, {'action': null}],
    [1, 'Ofise', {'vote': 3}, {'malignancy': 2}, {'action' : ['get', 3]}],
    [4, 'Trouble', {'not':0}, {'not': 0}, {'action' : {'array':'trable'}}],
    [1, 'Prison', {'cost' : 100, 'vote' : 3}, {'not': 0}, {'action' : 'not'}],
    [2, 'Prison', {'not': 0}, {'malignancy': 1}, {'action' : {'teleport' : 24}}],
    [1, 'Prison', {'not': 0}, {'malignancy': 2}, {'action' : {'teleport' : 24}}],
];
/**
 * Метод получает лимит (ограничение) для хода игрока.
 * @param {*} limit ограничение хода в цифрах.
 */
function moove(limit) {
    clickCard = true;
    globalLimit = limit;
    console.log('globalLimit ' + globalLimit)
    if (clickPoint && clickCard) {
        moovePlayer();
    }
    //$('.square-limit').animate({ 'marginTop': '-797px', 'marginLeft': '210px' }, 700)
    console.log('clickCard ' + clickCard);
}
function initPoints() {
    let i = 1;
    let startLeft = arrayPoints[localPoint][0];
    let startTop = arrayPoints[localPoint][1];
    $('.square-limit').css({ 'marginTop': startTop, 'marginLeft': startLeft });
    for (let point in arrayPoints) {
        let left = arrayPoints[point][0];
        let top = arrayPoints[point][1];
        $('.cont-field').append('<div class="points" id="minus' + i + '" onclick="goPoint(' + staples + 'minus' + i + staples + ')" style="margin-left: ' + left + 'px; margin-top: ' + top + 'px;"></div>');
        i++;
    }

    /* $('.cont-field').append('<div class="points" id="minus6" onclick="getPoint(255, -1020, positive,' + staples + 'minus6' + staples +')" style="margin-left: 255px; margin-top: -980px;"></div>');
    $('.cont-field').append('<div class="points" id="minus5" onclick="getPoint(345, -1060, positive,' + staples + 'minus5' + staples +')" style="margin-left: 345px; margin-top: -1020px;"></div>');
    $('.cont-field').append('<div class="points" id="minus4" style="margin-left: 255px; margin-top: -210px;"></div>');
    $('.cont-field').append('<div class="points" id="minus3" style="margin-left: 255px; margin-top: -210px;"></div>'); */
}
/**
 * Метод получает id пнкта куда должен двигатся игрок.
 * @param {string} txtId 
 */
function goPoint(txtId) {
    clickPoint = true;
    globalId = txtId.replace(/minus/g, '');
    if (clickPoint && clickCard) {

        moovePlayer();
    }
}
/**
 * Метод создает анимацию из полученых данных.
 */
function moovePlayer() {
    let newWey = getWey(globalId, localPoint);
    console.log(newWey);
    console.log('steps ' + steps);
    if (globalLimit == steps) {
        for (let point in newWey) {

            let newLeft = newWey[point][0];
            let newTop = newWey[point][1];
            $('.square-limit').animate({ 'marginTop': newTop + 'px', 'marginLeft': newLeft + 'px' }, 700);

        }
    } else {
        console.log('Лимит карты не позволяет');
        clickPoint = false;
        clickCard = false;
    }

    clickPoint = false;
    clickCard = false;

}
function getCards(callback)
{
    $.ajax({
        url: 'http://gremlins.loc/php/index.php',
        type: 'GET',
        data: 'test',
        //async: false,
        success: callback
    });
}
/**
 * Получает список карт и смешивает в новом масиве.
 * @returns array()
 */
function shuflleCards(data) {
/*     var data = [];
    $.ajax({
        url: 'http://gremlins.loc/php/index.php',
        type: 'GET',
        data: 'test',
        //async: false,
        success: function (dataJson) {
            let dt = JSON.parse(dataJson);
            initCards(dt);

        }
    }); */
    let i = data.length;
        while (i > 0) {
            const j = Math.floor(Math.random() * (i + 1));
            //console.log(dataImages[j]);
            const temp = data[i];
            data[i] = data[j];
            data[j] = temp;
            i--;
        }
    return data;

}
/**
 * Иницилизируем карты
 */
function initCards() {
    getCards(function(data){
        let dt = JSON.parse(data);
        dataImages = shuflleCards(dt);
        console.log(dataImages);
        for (let i = 0; i < 6; i++) {
            $('.hand-player').append('<button type="button" onclick="moove(' + dataImages[i] + ')">' + dataImages[i] + '</button>')
        }
        //callback(data);

    });   

}
/**
 * Создает массив для формирпование короткого пути.
 * @param {*} id id пункта куда нужно двигатся
 * @param {*} point пункт где находится игрок
 * @returns 
 */
function getWey(id, point) {
    //secondary
    console.log('id: ' + id);
    console.log('localPoint ' + localPoint);
    //счетчик статусов
    let st = 0;
    let sec = 0;
    let beginStatus = 0;
    let endStatus = 0;
    let allWey = [];
    let oldId = id;
    let oldStatus = arrayPoints[id][2];
    let startStatus = arrayPoints[point + 1][2];
    while (id > point) {
        point++;
        let newLeft = arrayPoints[point][0];
        let newTop = arrayPoints[point][1];
        let status = arrayPoints[point][2];
        let newOldStatus = arrayPoints[oldId][2];
        if (oldStatus == newOldStatus && endStatus == 0) {
            st++;
            oldId--;
        } else {
            endStatus = st;
        }
        if (status == startStatus && beginStatus == 0) {
            sec++;
        } else {
            beginStatus = sec;
        }

        allWey.push([newLeft, newTop, status]);

        /* if (status == 'main' && sec == 0 && beginStatus == 0) {
            mn++;
        } else if (mn >= 1 && status == 'secondary') {
            beginStatus = mn;
        }
        if (status == 'secondary' && mn == 0 && beginStatus == 0) {
            sec++;
        } else if (sec >= 1 && status == 'main') {
            beginStatus = sec;
        } */


    }
    console.log('beginStatus ' + beginStatus);
    console.log('endStatus ' + endStatus);

    if (sec == allWey.length) {
        return allWey;
    }
    let j = 0;
    let step = 0;
    for (let i = 0; i < allWey.length; i++) {
        let nextStatus = allWey[i][2];
        if (i + 1 > beginStatus && i < allWey.length - endStatus) {
            if (nextStatus == 'secondary') {
                delete (allWey[i]);
                step++;
            }
        }
    }
    console.log('step ' + step);
    if (step > 0) {
        steps = (allWey.length - step)
    } else {
        steps = allWey.length - 1;
    }

    localPoint = point - 1;
    return allWey;
}
/**
 * Поиск id пункта по кординатам
 * @param {*} left левый сдвиг
 * @param {*} top верхний сдвиг
 * @returns 
 */
function findIdPoint(left, top) {
    for (point in arrayPoints) {
        let newLeft = arrayPoints[point][0];
        let newTop = arrayPoints[point][1];
        //console.log('find ' + newLeft);
        if (left == newLeft && top == newTop) {
            return point;
        }

    }
    return null;
}
function start() {
    initPoints();
    initCards();
}