/*
Callback:async quivalent of a function
helps in a non-blocking code
helps in a performance of single thread application
callback hell: call back function inside again callback called callback hell
we need to break callback hell using await, async, promise using for break big function to make it small modules..
*/

setTimeout(function () { 
    console.log('Callback as Standard Function'); 
}, 1000);