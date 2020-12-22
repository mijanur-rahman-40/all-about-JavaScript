function Animal(name) {
    this.name = name;
}

Animal.prototype.printName = function () {
    console.log(this.name);
}
/**
 * here new keyword basically has four work,those are given below
 * (1) create empty object.
 * (2) then copy the prototype into object.
 * (3) execute constructor with this.
 * (4) finally return object.
 */
let cat = new Animal('Cat');
let dog = new Animal('dog');

cat.printName();

//working procedure of new by doing
function myNew(constructor) {
    let obj = {};
    Object.setPrototypeOf(obj, constructor.prototype);
    //arguments is a reserved function like array but not properly array    
    console.log(arguments);
    //we need to slice the myNew Parameter after Animal
    //so we have to use array slice function
    let argsArray = Array.prototype.slice.apply(arguments);
    constructor.apply(obj, argsArray.slice(1));
    return obj;
}

let pat = myNew(Animal, 'apple');
pat.printName();

//test with new object
let Person = function (name, age) {
    this.name = name;
    this.age = age;
}

let p1 = myNew(Person, 'orange', 22);
console.log(p1);