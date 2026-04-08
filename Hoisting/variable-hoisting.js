// variable hoisting 

console.log(a); // undefined
var a = 10;

// no error in console beacuse this is what js will interpret before compiling 

var a;       // hoisted
console.log(a); // undefined
a = 10;




// for let and const 
// let and const are hoisted BUT not usable before declaration.

console.log(c);  // this will throw erro
let c = 20;

// internally 
// c is hoisted but not initialized
console.log(cr);   //cant acces yet
let cr = 20;


