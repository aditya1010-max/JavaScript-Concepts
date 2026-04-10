// with call, apply and bind - we decide the use of this 

//1. call()

// calls a function immediately with a specific this 

// example 

const person = {
    name: "adi",
};

function greet() {
    console.log(this.name);
}

greet.call(person); // this will give us output as adi


//with arguments 

function greet(age) {
    console.log(this.name, age);
}

greet.call(person, 22);



// 2. apply 
// same as call, but arguments are passed as array 

function greet1() {
    console.log(this.name, age, city);
}

greet.apply(person, [22, "Pune"]);


// 3. bind
// does not call immediateely 
// returns a new function with fixed this 

const boundFn = greet.bind(person);

boundFn();


// with arguments 

const boundFn1 = greet1.bind(person, 22);

boundFn1();  // Adi 22



// real use case (but problem of losing this)

const obj = {
    name: "Adi",
    greet2() {
        console.log(this.name);
    },
};

const fn = obj.greet1;
fn();  //this will be undefined

//fix using bind 
const fn2 = obj.greet1.bind(obj);
fn(); //Adi


// Summary
// call → run now
// apply → run now (array args)
// bind → run later (most useful)

