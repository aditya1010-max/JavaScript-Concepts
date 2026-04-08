// Function vs Variable priority

console.log(asdfg);

var asdfg = 10;  //lower priority

function asdfg() {   //higher priority
  console.log("hello");
}



//hoisting in function

function test() {
  console.log(a);
  var a = 10;  //hoisted for ffunction scope
}

test(); //output will be undefined



// var and function scope

var ac = 1;

function test2() {
    var ac = 2;
    console.log("ac", ac);
 
}

test2(); // this will print undefined

// it will compile as 

// var a; // hoisted locally
// console.log(a); // undefined
// a = 2;  // and then we have 2 