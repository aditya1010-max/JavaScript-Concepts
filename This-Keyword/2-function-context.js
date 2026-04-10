// this depends on how the function is called, not where its written 

// case 1: Nornmal function call

function greet() {
    console.log(this);
}

greet();

//output
//Browser (non-strict): window
//Strict mode: undefined


// case 2: function inside object(called normally)

const obj = {
    name: "aditya",
    greet1: function () {
        console.log(this);
    },
};

const fn = obj.greet1;
fn();  //this will give output as window (beacuse this is normal function call)



// case 3: Method call

const obj2 = {
    name: "hello",
    greet2() {
        console.log(this)
    },
};
 
obj2.greet2();  // this will actually print the object 


// case 4: nested function

const obj3 = {
    name: "speed",
    greet3() {
        function inner() {
            console.log(this);
        }
        inner();
    },
};

obj3.greet3();

//output will not be window object 
// beacuse this is a normal function call and looses this 


// so how do we save this

// fix 1:

greet4();{
    const self = this;

    function inner() {
        console.log(self);
    }

    inner();
}

// fix 2: arrow function 

greet4();{
    const inner = () => {
        console.log(this);
    };

    inner();
}


// case 5: setTimeout 

const obj4 = {
    name: "Adi",
    greet5() {
        setTimeout(function() {
            console.log(this);
        }, 1000);
    },
};

obj4.greet();  // this will also loose the window object 

// fix - use arrow fucntion

setTimeout(() => {
    console.log(this);
}, 1000);