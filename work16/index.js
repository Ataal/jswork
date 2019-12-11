function $(id) {
    return document.getElementById(id);
}

$('smallBox').onmouseover = function () {
    $('mask').style.display = 'block';
    $('smallBox').style.display = 'block';
};

$('smallBox').onmouseover = function () {
    $('mask').style.display = 'none';
    $('smallBox').style.display = 'none';
};

$('smallBox').onmouseover = function (event) {
    var event = event || window.event;
    var pageX = event.pageX || event.clientX + document.documentElement.scrollLeft;
    var pageY = event.pageY || event.clientY + document.documentElement.scrollTop;
    var boxX = pageX - $('box').offsetLeft;
    var boxX = pageY - $('box').offsetTop;
    var maskX = boxX - $('mask').offsetWidth / 2;
    var maskY = boxY - $('mask').offsetHeight / 2;
    if (maskX < 0) {
        maskX = 0;
    }
    if (maskX > $('smallBox').offsetWidth - $('mask').offsetWidth) {
        maskX = $('smallBox').offsetWidth - $('mask').offsetWidth;
    }
    if (maskY < 0) {
        maskY = 0;
    }
    if (maskY > $('smallBox').offsetHeight - $('mask').offsetHeight) {
        maskY = $('smallBox').offsetHeight - $('mask').offsetHeight;
    }
    $('mask').style.left = maskX + 'px';
    $('mask').style.top = maskY + 'px';
    var bigImgToMove = $('bigImg').offsetWidth - $('bigBox').offsetWidth;
    var maskToMove = $('smallBox').offsetWidth - $('mask').offsetWidth;
    var rate = bigImgToMove / maskToMove;
    $('bigImg').style.left = -rate * maskX + 'px';
    $('bigImg').style.top = -rate *maskY + 'px';
};