// arrow function and this 

// Arrow function do not have their own "this" 
// They take "this" from their surrounding(parent)

//Normal function

const obj = {
    name: "aditya",
    greet: function() {
        console.log(this.name);
    },
};

obj.greet();

// output will be 'Aditya'


// Arrow function 

const obj2 = {
    name: "adityaa",
    greet2: () => {
        console.log(this.name);
    },
};

obj2.greet2()
// This will print undefined beacuse arrow function does not use "obj" as "this", it uses parents scopes "this"

// in global scope: this === window    so, window.name will be undefined


//Arrow Funtions with setTimeout

//Using NOrmal function
const obj3 = {
    name: "adityaaa",
    greet3() {
        setTimeout(function() {
            console.log(this.name);
        }, 1000);
    },
};

obj.greet3();  // this will print undefined 


//using arrow function
const obj4 = {
    name: "adityaaaa",
    greet4() {
        setTimeout(() => {
            console.log(this.name);
        }, 1000);
    },
};

obj4.greet4();  // this will give us the output 
// beacuse in arrow function - this is borrowed from greet4() and greet4() was called by obj4
 

