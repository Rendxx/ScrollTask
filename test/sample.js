$(function () {
    var tag1 = document.getElementById('tag-1');
    var tag2 = document.getElementById('tag-2');
    var tag3 = document.getElementById('tag-3');
    var content = document.getElementById('content');

    var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    $$.scroll.set(content, windowHeight-800, function () {
        $(tag1).addClass('hide');
        $(tag3).removeClass('hide');
    }, $$.scroll.REFERENCE.TOP, $$.scroll.DIRECTION.DOWN);

    $$.scroll.set(content, 0, function () {
        $(tag1).removeClass('hide');
        $(tag3).addClass('hide');
    }, $$.scroll.REFERENCE.TOP, $$.scroll.DIRECTION.UP);

    $$.scroll.set(content, (windowHeight - 800)/2, function () {
        $(tag2).toggleClass('green');
    }, $$.scroll.REFERENCE.TOP);
});