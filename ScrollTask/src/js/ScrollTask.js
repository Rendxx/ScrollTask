/************************************************ 
Scroll Task
Copyright (c) 2014-2015 Dongxu Ren  http://www.rendxx.com/

License: MIT (http://www.opensource.org/licenses/mit-license.php)
Version: 0.0.1
Update: 2015-11-10

Description:
    Monitor scrolling action and run pre-defined task when scroll to specific position on screen.
    
Compatibility:
    Chrome; Fire Fox; Safari; Edge; IE 9-11; IE 7,8;
 
Dependency:
    jQuery

API:
    $$.scroll.set(target, pos, func, direction)

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
            }
        };

        // set a task
        var set = function (target, pos, func, direction) {
            if (direction == null) direction = _data.DIRECTION.BOTH;

            var idx2 = 0;
            var list = null;
            task[key] = {
                target: target,
                pos: pos,
                func: func,
                direction: direction,
                last: target.getBoundingClientRect().top
            };
            _count++;

            if (!_setuped) {
                window.onscroll = bindFunction;
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
        var bindFunction = function () {
            if (_count <= 0) return false;
            var currentPos = -document.body.getBoundingClientRect().top;
            if (currentPos == _lastPos) return;
            
            var _DOWN = _data.DIRECTION.DOWN;
            var _UP = _data.DIRECTION.UP;
            for (var i = 0, l = task.length; i < l; i++) {
                var t = task[i];
                if (t == null) continue;
                var last = t.target.getBoundingClientRect().top;
                if (currentPos > _lastPos) {
                    // Scroll down
                    if ((t.direction & _DOWN) != 0 &&(t.last > t.pos && t.pos >= last)) t.func();
                } else {
                    // Scroll Up
                    if ((t.direction & _UP) != 0 && (t.last < t.pos && t.pos <= last)) t.func();
                }
                console.log(t.last, t.pos, last);
                t.last = last;
            }

            _lastPos = currentPos;
        };

        // Setup global function
        var functionSetup = function () {
            // Basic function

            window.$$ = window.$$ || {};
            window.$$.scroll = {};
            window.$$.scroll.DIRECTION = _data.DIRECTION;
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