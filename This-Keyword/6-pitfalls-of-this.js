//MOST OF THESE CASES ARE ALREADY DISCUSSED IN OTHER 5 FILES 


// Pitfall 1: Losing this wheen passing methods

const obj = {
    name: "adi",
    greet() {
        console.log(this.name);
    },
};

setTimeout(obj.greet, 1000);

//output will be undefined  beacuse setTiemout(obj.greet) becomes fn(); which is normal call and loses 'this'

//Fix 

setTimeout(obj.greet.bind(obj), 1000);  
//or
setTimeout(() => obj.greet(), 1000);


//Pitfall 2: Destructuring methods 

const obj2 = {
    name: "Aditya",
    greet2() {
        console.log(this.name);
    },
};

const { greet2a } = obj2;
greet2a();  // output will be undefined


//Fix 
const greet2b = obj2.greet2b.bind(obj2);



// Pitfall 3: Arrow function as object method 

const obj3 = {
    name: "adi",
    greet3: () => {
        console.log(this.name);
    },
};

obj3.greet3();  //output will be undefined
// beacuse arrow function uses global this, not obj

//Fix 
// greet3b(){
//     console.log(this.name);
// }



// pitfall 4: Nested functtion inside method 

const obj4 = {
    name: "adi",
    greet4() {
        function inner() {
            console.log(this.name);
        }
        inner();
    },
};

obj4.greet4(); //undefined
 
// fix

const obj4b = {
    name: "Adi",
    greet() {
        const inner = () => {
            console.log(this.name);
        };
        inner();
    }
}


//Pitfall 5: Event listners confusion 

button.addEventListener("click", function() {
    console.log(this);   //this is correct way
});


button.addEventListener("click", () => {
    console.log(this);   // this is the wrong way 
});

//normal function -> this = element
// arrow -> inherits outer this 


//Pitfall 6; Class method used as callback 

class Person {
    constructor(name) {
        this.name = name;
    }

    greet6() {
        console.log(this.name);
    }
}

const p6 = new Person("Neymar");

setTimeout(p.greet6, 1000);  // this is wrong


//Fix 

setTimeout(p.greet6.bind(p), 1000); //using bind

//or 

greet6 = () => {
    console.log(this.name);
};


//Pitfall 7: Mixing this with closures 

function outer() {
    this.value = 10;

    return function() {
        console.log(this.value);
    };
}

const fn7 = outer();
fn7();