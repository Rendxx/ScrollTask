
# API Document

#### $$.scroll.set(target, offset, func [, reference [, direction]]) ```number``` 
Setup a task. A key will be returned. This key can be used to clear the task by ```$$.scroll.clear(key)```

- **target** ```Dom Element```  
The dom element being monitored.  

- **offset** ```number```  
Offset from reference. If the target dom element reach the offset position, the task will be triggered.  
Offset can be negatived.

- **func** ```function(object)```  
Function of the task. This function will be called when the task is triggered.  
This function will receive an object as argument: 
>This object contains the following 
>  + **key** ```number```  
>   Key of the task. Can be used to clear this task.
>
>  + **target** ```Dom Element```  
>   *[same as __target__]*
>  
>  + **offset** ```number```  
>   *[same as __offset__]*
>  
>  + **reference** ```number```  
>   *[same as __reference__]*
>  
>  + **direction** ```number```  
>   *[same as __direction__]*

- **reference** ```number```  
Reference of offset, can be top or bottom of browser window.  
> Here is 2 reference value:  
> ```$$.scroll.REFERENCE.TOP``` : top of browser  
> ```$$.scroll.REFERENCE.BOTTOM``` : bottom of browser

- **direction** ```number```  
The scrolling direction condition to trigger the task. It can be set as UP / DOWN / BOTH.
> Here is 3 direction value:  
> ```$$.scroll.DIRECTION.UP``` : will be trigger when scroll up  
> ```$$.scroll.DIRECTION.DOWN``` : will be trigger when scroll down  
> ```$$.scroll.DIRECTION.BOTH``` : will be trigger when scroll both up and down  

<h1></h1>

#### $$.scroll.clear(key)
Clear a task by its key.

- **key** ```number```  
The key returned by ```$$.scroll.set```.  

