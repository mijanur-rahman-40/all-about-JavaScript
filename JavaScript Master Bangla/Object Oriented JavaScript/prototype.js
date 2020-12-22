//create object with constructor pattern
function Person(name, age) {
    this.name = name;
    this.age = age;
    /*
    here both function has same print logic for both object
    so we declare the method in the outdoor for avoid repetitions
    so this is called prototype
     */
    this.hello = function () {
        console.log('Hello ' + this.name);
    }
}

//prototype is a one kind of object
let p1 = new Person('Apple', 22);
let p2 = new Person('Orange', 20);

console.log(p1);
console.log(p2);

function _person(name, age) {
    this.name = name;
    this.age = age;
}
/*
_person.prototype.hello = function () {
    console.log('Hello ' + this.name);
};
_person.prototype.print = function () {
    console.log(this.name, this.age);
};
*/

//same way is done by another process but both process does not work at a time

_person.prototype = {
    welcome: function () {
        console.log('Hello is ' + this.name);
    },
    scan: function () {
        console.log('Hello ' + this.age);
    },
    address: 'abc'
};

_person.prototype.email = 'someone@gmail.com';
let ob1 = new _person('Apple', 22);
let ob2 = new _person('Orange', 20);

console.log(ob1);
ob1.welcome();

console.log(ob1.email);
console.log(ob2.email);

//console.log(ob2.print());
//console.log(ob2.scan());
//console.log(ob2, ob2.hello());