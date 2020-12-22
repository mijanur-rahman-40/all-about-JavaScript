/***********************************************
 * New ES6 Features
 * letiable Declaration's with let and const
 * Blocks and IIFEs
 * Strings
 * Arrow Functions
 * Destructuring
 * Arrays
 * The Spread Operator
 * Rest and Default Parameters
 * Maps
 * Classes and Subclasses
 */

/*****************************************
 * Let and Const
 */

//ES5
let name5 = 'Jane Smith';
let age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

//ES6
const name6 = 'Jane Smith';
let age6 = 23;
//name6 = 'Jane Miller';
console.log(name6);

//ES5
function driverLicence5(passedTest) {
    if (passedTest) {
        console.log(firstName);
        let firstName = 'John';
        let yearOfBirth = 1998;

    }
    console.log(firstName + 'born in ' + yearOfBirth + ' is now officially allowed to drive a car.');
}

driverLicence5(true);

//ES6
function driverLicence6(passedTest) {

    //console.log(firstName);
    let firstName;
    const yearOfBirth = 1998;
    if (passedTest) {
        /*
        Let and Const are not function scoped but block scoped
         */
        firstName = 'John';
    }
    console.log(firstName + 'born in ' + yearOfBirth + ' is now officially allowed to drive a car.');
}

driverLicence6(true);

//here i is block scoped
let i = 23;
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);

//here j is not block scoped
let j = 20;
for (j = 0; j < 5; j++) {
    console.log(j);
}
console.log(j);


/*****************************************
 * Immediately-invoked function expression(IIFE)
 */

//ES6
{
    const a = 2;
    let b = 2;
    let c = 3;
    console.log(a + b);
}
console.log('c = ' + c);
//console.log(a + b);

//ES5
(function () {
    let c = 3;
    console.log(c);
})();
//console.log(c);

//String
let firstName = 'John';
let lastName = 'Smith';

const yearOfBirth = 1998;

function calcAge(year) {
    return 2016 - year;
}

//ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today he is ' + calcAge(yearOfBirth) + ' years old.');


/*****************************************
 * backticks quotation mark
 */

//ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.startsWith('Jo'));
console.log(n.includes(' '));
console.log(n.includes('oh'));
console.log(firstName.repeat(5));
console.log(`${firstName} `.repeat(5));

/*****************************************
 * Arrow Functions
 */

const years = [1990, 1965, 1982, 1937];

//ES5
let age_5 = years.map(function (el) {
    return 2016 - el;
});
console.log(age_5);

//ES6
//Three ways of writing arrow function
let age_6 = years.map(el => 2019 - el);
console.log(age_6);

age_6 = years.map((el, index) => `Age element ${index + 1}: ${2019 - el}.`);
console.log(age_6);

age_6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`;
});
console.log(age_6);

/*****************************************
 * Arrow function 2
 */


//arrow function do not have this keyword

//ES5
/*
let box5 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        document.querySelector('.green').addEventListener('click', function () {
            //here used lexical this keyword
            //Here this call the window object so,it can not indicate color and finally it is undefined
                let str = 'This is box number ' + this.position + ' and it is ' + this.color;
                alert(str);
            }
        );
    }
};

box5.clickMe();

*/
/*
let box_5 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        let self = this;
        document.querySelector('.green').addEventListener('click', function () {
                let str = 'This is box number ' + self.position + ' and it is ' + self.color;
                alert(str);
            }
        );
    }
};
box_5.clickMe();

//ES6

let box6 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        document.querySelector('.green').addEventListener('click', () => {
                //function body
                let str = 'This is box number ' + this.position + ' and it is ' + this.color;
                alert(str);
            }
        );
    }
};

box6.clickMe();

let box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        //here also used lexical this keyword
        document.querySelector('.green').addEventListener('click', () => {
                //function body
                let str = 'This is box number ' + this.position + ' and it is ' + this.color;
                alert(str);
            }
        );
    }
};

box66.clickMe();

*/

//function constructor
function Person(name) {
    this.name = name;
}

//ES5
Person.prototype.myFriends5 = function (friends) {
    //let th = this;
    let arr = friends.map(function (el) {
        //return th.name + ' is friends with '+ el;
        return this.name + ' is friends with ' + el;
    }.bind(this));
    console.log(arr);
};
let friends = ['Bob', 'Jane', 'Mark'];
new Person('Jone').myFriends5(friends);

//ES6
function Person6(name) {
    this.name = name;
}

Person6.prototype.myFriends6 = function (friends) {
    let arr = friends.map(el => `${this.name} is friends with ${el}`);
    console.log(arr);
};

let _friends = ['Bob', 'Jane', 'Mark'];
new Person6('Mike').myFriends6(_friends);

/*****************************************
 * Destructuring
 */

//ES5
let john = ['John', 26];
let name = john[0];
let age = john[1];
console.log(name + ' ' + age);

//ES6
//it is also works with object
const [_name, _year] = ['John', 26];
console.log(_name);
console.log(_year);

const obj = {
    _firstName: 'John',
    _lastName: 'Smith'
};
console.log(obj._firstName);
//console.log(_firstName);

const {_firstName, _lastName} = obj;
console.log(_firstName);
console.log(_lastName);

const {_firstName: a, _lastName: b} = obj;
console.log(a);
console.log(b);

function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [_age, retirement] = calcAgeRetirement(1990);
console.log('age : ' + _age + ' ' + 'retirement : ' + retirement);

/*****************************************
 * Arrays
 */

const boxes = document.querySelectorAll('.box');
//query selector does not return array

//ES5 for change the background color
let boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function (cur) {
    cur.style.backgroundColor = 'blue';
    cur.style.color = 'white';
});
//console.log(boxesArr5);

//ES6 for change the background color
const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(cur =>
    cur.style.backgroundColor = 'green'
);

//We can not use for each with continue and break,also map

//ES5 for change the text
for (let k = 0; k < boxesArr5.length; k++) {
    if (boxesArr5[k].className === 'box blue') {
        //continue;
        break;
    }
    boxesArr5[k].textContent = 'I changed to blue';
}

//ES6 for change the text
for (const cur of boxesArr6) {
    /*
    if (cur.className === 'box green') {
        continue;
    }
    */
    //same working method
    if (cur.className.includes('green')) {
        continue;
    }
    cur.textContent = 'I changed to green';
}

//ES5 array important function
let ages = [12, 19, 27, 8, 13, 11];

let full = ages.map(function (cur) {
    return cur >= 18;
});
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//Same thing in ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));

/*****************************************
 * Spread Operator
 */

function addFourAges(a, b, c, d) {
    return a + b + c + d;
}

let sum1 = addFourAges(18, 30, 12, 21);
console.log('sum1 is : ' + sum1);

//ES5
let _ages = [18, 30, 12, 21];

//here apply method take this array
let sum2 = addFourAges.apply(null, _ages);
console.log('sum2 is : ' + sum2);

//Es6
//here spread operator is ... its expand the ages array
const sum3 = addFourAges(..._ages);
console.log('sum3 is : ' + sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];

const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);

const h = document.querySelector('h1');
const box_all = document.querySelectorAll('.box');
const all = [h, ...box_all];

Array.from(all).forEach(cur => cur.style.color = 'white');


/*********************************************
 * Rest Parameters
 * is an arbitrary number of arguments into a function
 */

//ES5
//arguments is not an array,so that if you want to loop then first convert into array the arguments
//using rest parameters
function isFullAge5() {
    //console.log(arguments);
    let argArray = Array.prototype.slice.call(arguments);
    argArray.forEach(function (cur) {
        console.log((2016 - cur) >= 18);
    });

}

isFullAge5(1990, 1999, 1965);

console.log('------------------------------------');

//ES6
/**
 * the spread operator is used in the function call
 * the rest operator is used in the function declaration to exact an arbitrary number of parameters
 *
 */
function isFullAge6(...years) {
    //console.log(years);
    years.forEach(cur => console.log((2016 - cur) >= 18));
}

isFullAge6(1990, 1999, 1965, 1978, 1991);


console.log('------------------------------------');


//using limit
//ES5
//slice method cut a piece of an array
function _isFullAge5(limit) {

    let argArray = Array.prototype.slice.call(arguments, 1);
    //here number 1 means it's going to start cutting at position number one,so that we can exclude first arguments
    //console.log(argArray);
    argArray.forEach(function (cur) {
        console.log((2016 - cur) >= limit);
    });

}

_isFullAge5(21, 1990, 1999, 1965);

console.log('------------------------------------');


//ES6
function _isFullAge6(limit, ...years) {
    //console.log(years);
    years.forEach(cur => console.log((2016 - cur) >= limit));
}

_isFullAge6(16, 1990, 1999, 1965, 2016, 1987);

/**************************************************************
 * Default Parameters
 */

//ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'American' : nationality = nationality;

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

let _john = new SmithPerson('John', 1990);
let emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');

//ES6
function _SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

let __john = new SmithPerson('John', 1990);
let _emily = new _SmithPerson('Emily', 1983, 'Diaz', 'spanish');

/**********************************************
 * Maps
 * map is a key value data structure
 */

const question = new Map();
question.set('question', 'what is the official name of the latest javascript?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer : D');
question.set(false, 'Wrong,please try again');
console.log(question.get('question'));
console.log(question.size);

if (question.has(4)) {
    //question.delete(4);
    console.log('Answer 4 is here');
}
//question.clear();

question.forEach((value, key) =>
    console.log(`This is ${key}, and it's set to ${value}`)
);

console.log('-----------------------------');

for (let [key, value] of question.entries()) {
    //console.log(`This is ${key}, and it's set to ${value}`)
    if (typeof (key) === 'number') {
        console.log(`Answer ${key} ${value}`);
    }
}

const ans = parseInt(prompt('Write the correct answer : '));
console.log(question.get(ans === question.get('correct')));

console.log('---------------------------------');

/*****************************************
 * Classes
 */

//ES5
let Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person5.prototype.calculateAge = function () {
    let currentDate = new Date().getFullYear();
    let age = currentDate - this.yearOfBirth;
    console.log(this.name + ' ' + this.job + ' is --: ' + age);
};

//Subclass and call basically inherited
let Athlete5 = function (name, yearOfBirth, job, olympicGame, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGame = olympicGame;
    this.medals = medals;
};

//first we have to add Athlete5 prototype property
Athlete5.prototype = Object.create(Person5.prototype);

//Athlete5 function using
Athlete5.prototype.wonMedal = function () {
    this.medals++;
    console.log(this.medals);
};

let johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);
johnAthlete5.calculateAge();
johnAthlete5.wonMedal();

let john5 = new Person5('John', 1998, 'teacher');
john5.calculateAge();


console.log('--------------------------------------');

//ES6
class Person66 {
    constructor(name, YearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        let age = new Date().getFullYear() - this.yearOfBirth;
        console.log(this.name + 'his name and age is : ' + age + ' and also job is : ' + this.job);
    }

    //this method attached with class definition
    static greeting() {
        console.log('Hey there');
    }
}

//creating subclass of Person6
class Athlete6 extends Person66 {
    constructor(name, YearOfBirth, job, olympicGame, medals) {
        super(name, YearOfBirth, job);
        this.olympicGame = olympicGame;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athlete6('John',1990,'swimmer',3,10);
johnAthlete6.wonMedal();

let ob = new Person66('John', 1998, 'teacher');
ob.calculateAge();
Person66.greeting();





