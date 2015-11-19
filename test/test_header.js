$(function () {
    var header1 = document.getElementById('header-1');
    var header2 = document.getElementById('header-2');
    var content1 = document.getElementById('content-1');
    var content2 = document.getElementById('content-2');
    var text = document.getElementById('text');
    $$.scroll.set(content1, 40, function () {
        $(header2).show();
    }, $$.scroll.REFERENCE.TOP, $$.scroll.DIRECTION.DOWN);
    $$.scroll.set(content1, 40, function () {
        $(header2).hide();
    }, $$.scroll.REFERENCE.TOP, $$.scroll.DIRECTION.UP);

    $$.scroll.set(content2, 100, function (event) {
        $(text).hide().fadeIn(400);
        $$.scroll.clear(event.key);
    }, $$.scroll.REFERENCE.BOTTOM, $$.scroll.DIRECTION.DOWN);
});