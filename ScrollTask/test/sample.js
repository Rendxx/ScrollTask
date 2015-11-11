$(function () {
    var header1 = document.getElementById('header-1');
    var header2 = document.getElementById('header-2');
    var content1 = document.getElementById('content-1');
    var content2 = document.getElementById('content-2');
    var text = document.getElementById('text');
    $$.scroll.set(content1, 100, function () {
        $(header2).stop(false,true).fadeIn(300);
    }, $$.scroll.DIRECTION.DOWN);
    $$.scroll.set(content1, 100, function () {
        $(header2).stop(false, true).fadeOut(300);
    }, $$.scroll.DIRECTION.UP);
    //$$.scroll.set(content2, 40, function () {
    //    $(text).fadeIn(400);
    //}, $$.scroll.DIRECTION.DOWN);
});