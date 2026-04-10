
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console,log(this.name);
    }
}

const p1 = new Person("Messi");
p1.greet();

// Output will be Messi


//What happens internally?

const p2 = new Person("Messi");

//JS does ->
// 1. create empty object -> {}
// 2. sets this = {}
// 3. runs constructor
// 4. return this 


//When using new , this = newly created object 

// withou new 

class Person2 {
    constructor(name) {
        this.name = name;
    }
}

const p = Person("Adi");  
// Error class constructor cannot be invoked without 'new'


//Methods inside class 

class Person3 {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(this.name);
    }
}

Person3.prototype.greet = function () {
    console.log(this.name);
}


//problem of losing this in class methods

class Person4 {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(this.name);
    }
}


const Person4 = new Person4("Adi2");

const fn = p.greet;
fn();  //this will give us undefined

// beacuse fn() is a normal functional call abd loses this 


//Fix 1: bind in constructor 

class Person {
    constructor(name) {
        this.name = name;
        this.greet = this.greet.bind(this);
    }

    greet() {
        console.log(this.name);
    }
}


// Fix 2: Arrow function 

class Person {
    constructor(name) {
        this.name = name;
    }

    greet = () => {
        console.log(this.name);
    }
}