/************************************************ 
Scroll Task
Copyright (c) 2014-2015 Dongxu Ren  http://www.rendxx.com/

License: MIT (http://www.opensource.org/licenses/mit-license.php)
Version: 0.0.2
Update: 2015-11-18

Description:
    Monitor scrolling action and run pre-defined task when scroll to specific position on screen.
    
Compatibility:
    Chrome; Fire Fox; Safari; Edge; IE 9-11; IE 7,8;
 
Dependency:
    jQuery

API:
    $$.scroll.set(target, offset, func[, reference[, direction]])

    $$.scroll.clear(key)

    $$.scroll


************************************************/

$(function () {
    "use strict";

    var ScrollTask = function () {
        var that = this;
        var key = 0;            // index number used to identify task
        var task = [];          // task data list
        var _lastPos = 0;       // lat position of body, used to detect whether it is scrolling up or down
        var _count = 0;         // count of task
        var _setuped = false;   // whether the scroll function is binded or not

        var _data = {
            DIRECTION:{
                UP: 1,
                DOWN: 2,
                BOTH: 3
            },
            REFERENCE: {
                TOP: 1,
                BOTTOM: 2
            }
        };

        // set a task
        var set = function (target, offset, func, reference, direction) {
            // set default opts
            if (reference == null) reference = _data.REFERENCE.TOP;
            if (direction == null) direction = _data.DIRECTION.BOTH;

            // push options into list
            task[key] = {
                func: func,
                target: target,
                offset: offset,
                reference: reference,
                direction: direction,
                last: target.getBoundingClientRect().top,
                para: {
                    target: target,
                    offset: offset,
                    reference: reference,
                    direction: direction,
                    key:key
                }
            };
            _count++;

            // trigger the task if it fits the condition already
            var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            if ((direction & _data.DIRECTION.DOWN) != 0 &&
                ((reference == _data.REFERENCE.TOP && target.getBoundingClientRect().top < offset)
                  || (reference == _data.REFERENCE.BOTTOM && windowHeight-target.getBoundingClientRect().top > offset))) {
                func(task[key].para);
            }

            // bind scroll handler for  1st time
            if (!_setuped) {
                window.onscroll = scrollHandler;
                _setuped = true;
            }
            return key++;
        };

        // clear a task
        var clear = function (key) {
            if (!key in task) return;
            task[key] = null;
            _count--;
            if (_count <= 0) {
                task = [];
                key = 0;
            }
        };

        // bind function to scroll
        var scrollHandler = function () {
            if (_count <= 0) return false;

            var currentPos = -document.body.getBoundingClientRect().top;
            var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            if (currentPos == _lastPos) return;
            
            var _DOWN = _data.DIRECTION.DOWN;
            var _UP = _data.DIRECTION.UP;
            var _TOP = _data.REFERENCE.TOP;
            for (var i = 0, l = task.length; i < l; i++) {
                var t = task[i];
                if (t == null) continue;
                var last = t.target.getBoundingClientRect().top;
                var offset = _TOP == t.reference ? t.offset : windowHeight - t.offset;
                if (currentPos > _lastPos) {
                    // Scroll down
                    if ((t.direction & _DOWN) != 0 && (t.last > offset && offset >= last)) t.func(t.para);
                } else {
                    // Scroll Up
                    if ((t.direction & _UP) != 0 && (t.last < offset && offset <= last)) t.func(t.para);
                }
                t.last = last;
            }

            _lastPos = currentPos;
        };

        // Setup global function
        var functionSetup = function () {
            // Basic function

            window.$$ = window.$$ || {};
            window.$$.scroll = {};
            for (var i in _data) {
                if (!_data.hasOwnProperty(i)) continue;
                window.$$.scroll[i] = _data[i];
            }
            window.$$.scroll.set = set;
            window.$$.scroll.clear = clear;
        };

        // Initialize the whole function
        var init = function () {
            functionSetup();
        };
        init();
    };

    ScrollTask();
});