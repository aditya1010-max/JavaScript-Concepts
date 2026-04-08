const obj = new Person();

class Person {
  constructor(name) {
    this.name = name;
  }
}


// same behaviour as let/const
// classes are hoisted but not uable before declaration 
// in TDZ temporal dead zone (a fancy term) 
