// let a;

console.log(b)  // this will print undefined beacuse a is not hoisted


greet = function() {   // this function cannot be hoisted globally 
    console.log("Good Morning")
}

greet()   // calling the function after declaration is the right way 

var b = 10;
var a = 9;

console.log(a);  // this will print the value of a regardless of where it is declared 