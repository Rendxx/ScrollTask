# ScrollTask
Monitor scrolling action and run pre-defined task when scroll to specific position.

*Sample: [http://www.rendxx.com/Lib/Sample/7](http://www.rendxx.com/Lib/Sample/14 "Sample")*  
*Download: [ScrollTask v0.0.2](https://github.com/Rendxx/ScrollTask/releases/tag/0.0.2 "Download")*

## Install
Download the package from bower
```
bower install scroll-task --save
```

Including the file in your webpage
```HTML
<script type="text/javascript" src="/node_modules/scroll-task/js/ScrollTask.js"></script>
```

See **Code Sample** below for more details.

## API
[API Document](https://github.com/Rendxx/ScrollTask/blob/master/API%20Document.md)

## Code Sample
JavaScript:

```javascript
var key = $$.scroll.set(document.getElementById('content'), 60, function (event) {
    // code here will be run when [#content] is scrolling down
    // to 60px from top of browser window
}, $$.scroll.REFERENCE.TOP, $$.scroll.DIRECTION.DOWN);
```

## Compatibility
```Chrome``` ```Fire Fox``` ```Safari``` ```Edge``` ```IE 9-11``` ```IE 7,8```

## License 
Copyright &copy; 2015, Rendxx. (MIT License)  
See [LICENSE][] for more info.

[LICENSE]: https://github.com/Rendxx/ScrollTask/blob/master/LICENSE