// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck. 
 
let count = 0;
 
function recursiveCount(){
    console.log("Count: "+count++);
    callCounter();
}

function callCounter(){
    setTimeout(recursiveCount, 1000);
}

callCounter();





































































