// function declaration 

sayHello();

function sayHello() {
  console.log("Hello!");
}

// js internally moves function at the top 




// whereas for function expression 

sayHi(); 

const sayHi = function () {
  console.log("Hi!");
};

// here only variable is hoisted not the function
//js internally will do -

sayHiie(); 

const sayHiie = function () {
  console.log("Hi!");
};




// same for arrow-functions 
 
greet();  //this will throw an error 

const greet = () => {
  console.log("Hello");
};