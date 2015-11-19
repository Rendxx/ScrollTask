$(function () {
    var tag1 = document.getElementById('tag-1');
    var tag2 = document.getElementById('tag-2');
    var tag3 = document.getElementById('tag-3');
    var content = document.getElementById('content');

    $$.scroll.set(content, -100, function () {
        $(tag3).removeClass('hide');
        $(tag1).addClass('hide');
    }, $$.scroll.REFERENCE.TOP, $$.scroll.DIRECTION.DOWN);
    $$.scroll.set(content, -10, function () {
        $(tag1).addClass('hide');
        $(tag3).removeClass('hide');
    }, $$.scroll.REFERENCE.TOP, $$.scroll.DIRECTION.UP);

    //$$.scroll.set(content2, 100, function (event) {
    //    $(text).hide().fadeIn(400);
    //    $$.scroll.clear(event.key);
    //}, $$.scroll.REFERENCE.BOTTOM, $$.scroll.DIRECTION.DOWN);
});