//lexical scopes

function lexicalScope () {
    let a = 1;
    console.log(a);

    const y = () => {
        console.log(a);
    }
    a = 9
    a = 11;   //this will be returned 
    return y();

}

lexicalScope();

// returned values will be 1 and 11 




// example from mdn website 

function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();




if (Math.random() > 0.5) {
  var x = 1;
} else {
  var x = 2;
}
console.log(x);


//Closure

function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();




// slightly deep example of closure 

function makeAdder1(x) {
    return function (y) {
        return x + y;
    };
}

const add5 = makeAdder1(5);
const add10 = makeAdder1(10);

console.log(add5(2));  //7
console.log(add10(2)); //12


// Private methods with closures

const counter = (function () {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment() {
      changeBy(1);
    },

    decrement() {
      changeBy(-1);
    },

    value() {
      return privateCounter;
    },
  };
})();

console.log(counter.value()); // 0.

counter.increment();
counter.increment();
console.log(counter.value()); // 2.

counter.decrement();
console.log(counter.value()); // 1.

