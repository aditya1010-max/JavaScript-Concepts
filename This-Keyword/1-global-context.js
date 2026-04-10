// in browser

console.log(this);

// output will be : window (in browser runtime)
// output will be : global (in nodes runtime)


// example
var a = 10;
console.log(this.a);

//output will be 10



//also 
var x = 5;
let y = 10;

console.log(this.x); // 5 
console.log(this.y); // undefined

// var attacjes to window 
// let/const -> do not attach to window 



// In normal function 

function test() {
    console.log(this);
}

test();

// output will be window (bacuse function is called normally and it defaults to global object)



// In strict mode - JS prevents accidental use of global object

"use strict";

function test() {
    console.log(this);
}

test();

//output will be "undefined"