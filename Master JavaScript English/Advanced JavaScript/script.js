/////////////////////////////
// Lecture: Function constructor
/*
Function Constructor
here john is a object letiable
 */
/*****************
 * Functions are also objects in javascript
 * A function is an instance of the Object type
 * A function behaves like any other object
 * We can store functions in a letiable
 * We can pass a functions as an argument to another function
 * We can return a function from a function

 */
let _john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

let Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person.prototype.calculateAge = function () {
    console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

let john = new Person('John', 1990, 'teacher');
let jane = new Person('Jane', 1969, 'designer');
let mark = new Person('Mark', 1948, 'retired');

/*
Here we have to call one more time ,if here a lot of object is crete tha it is not so efficient,so we have to use prototype chane
 */

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);


/*
There  are more ways to create objects and inheritance
Object.create method
 */

let personProto = {
    calculateAge: function () {
        console.log(2016 - this.yearOfBirth);
    }
};
let __john = Object.create(personProto);
__john.name = 'john';
__john.yearOfBirth = 1990;
__john.job = 'teacher';

let __jane = Object.create(personProto, {
    name: {value: 'jane'},
    yearOfBirth: {value: 1990},
    job: {value: 'designer'}
});
__jane.calculateAge();
/*
1. The difference between object.create and the function constructor is Object.create builds an object that inherits
from the one that we passed into the first argument.
2. On the other hand ,th newly created object inherits from the constructor's prototype property,this is the basic difference.
3. one of the biggest benefits of object.create is that allows us to implements a really complex inheritant structures in an easier way than function constructors because it allows to directly specify which object should be a prototype
 */


/*
Primitives vs Objects
 */
/*****************************************
 primitives
 Each of letiables actually hold their own copy of the data,
 the do not reference anything
 */

let a = 23;
let b = a;
a = 48;
console.log(a);
console.log(b);


//Objects
/*
1. all that we did was to create a new reference which points to the first object.
2. so,object one and two both hold reference that point to the exact same object in the manually
3. function also act with similarly
 */

let object_1 = {
    name: 'john',
    age: 26
};
let object_2 = object_1;
object_1.age = 30;
console.log(object_1.age);
console.log(object_2.age);

//with function
let age = 27;
let obj = {
    name: 'Jonas',
    //city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);
/*
 1. Here we pass the age letiable holding a primitives and the object holding a reference to an object into our function.
 2. This function then as it was invoked
 3. When we pass a primitive into the function a simple copy is created,so when we change A as much as we want,it will never effect the letiable ont the outside because it is primitive But When we pass the object it is not really the object that we pass,but the reference to the object ,ok.
 4. Only reference point to the object.
 */


/*****************************************
 * First Class Function
 Passing function as arguments
 */
/***********
 *a function can accept other function
 */


let years = [1990, 1965, 1937, 2005, 1998];

//generic function ,i like to think as a machines
function arrayCalc(arr, fn) {
    let arrRes = [];
    for (let i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

//By call back function fn get the values
//calculate something based on each element of the array
function calculateAge(element) {
    return 2016 - element;
}

//we just use very generic parameter name el
function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }

}

let ages = arrayCalc(years, calculateAge);
let fullAges = arrayCalc(ages, isFullAge);
let rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);


/***************************************
 * Function Returning function
 * Anonymous function is called which does not have name
 */
function interViewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ' , can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function (name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function (name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

let teacherQuestion = interViewQuestion('teacher');
let designerQuestion = interViewQuestion('designer');

teacherQuestion('john');
designerQuestion('john');
designerQuestion('jane');
designerQuestion('Mark');
designerQuestion('Mike');

interViewQuestion('teacher')('Mark');


/**********************************************
 * Immediately Invoked Function Expression
 (); this is invoked the function
 */

/*
function game() {
    let score = Math.random() * 10;
    console.log(score >= 5);
}
game();
*/


/*
IIFE is not create a piece of code that we will reuse,this is just for data privacy
 */
(function () {
    let score = Math.random() * 10;
    console.log(score >= 5);
})();

//console.log(score);

(function (goodLuck) {
    let score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);


/***********************************
 * Closers
 * An inner function has always access to the letiable and parameters of its outer function,even after the outer function has returned.
 */

function retirement(retirementAge) {
    let a = ' years left until retirement';
    return function (yearOfBirth) {
        let age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

let retirementUs = retirement(66);
let retirementGermany = retirement(67);
let retirementIceland = retirement(68);

retirementUs(1990);
retirementGermany(1990);
retirementIceland(1990);
//another process to call
retirement(66)(1990);

//another example about closer
function Question(job) {
    return function (name) {
        if (job === 'designer') {
            console.log(name + ' , can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

Question('teacher'), ('john');


/*********************************************
 * JavaScript toolbox
 * power full Bind,Call,Apply
 * Function is a spacial kind of object
 */
/*
Functions also get a couple of special methods which they inherit from the function constructor object,right.
 */

let Michel = {
    name: 'Michel',
    age: 26,
    job: 'teacher',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen ! I\'m' + this.name + ', I\'m a ' + this.job + 'and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey , what\'s up? i\'m ' +
                this.name + ', I\'m a ' + this.job + 'and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};

let emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

Michel.presentation('formal', 'morning');

//method borrowing
//here call method allows to set this letiable
Michel.presentation.call(emily, 'friendly', 'afternoon');

//same works with another functionality
// but in this case ,it does not work ,because have to array in the method
//Michel.presentation.apply(emily,['friendly','afternoon']);

let johnFriendly = Michel.presentation.bind(Michel, 'friendly');
johnFriendly('morning');
johnFriendly('night');

let emilyFormal = Michel.presentation.bind(emily, 'formal');
emilyFormal('afternoon');

let year = [1990, 1965, 1937, 2005, 1998];

//call back function
function arrayCalculate(arr, fn) {
    let arrRes = [];
    for (let i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculate_Age(element) {
    return 2016 - element;
}

function isFull_Age(limit, el) {
    return el >= limit;
}

let _age = arrayCalculate(year, calculate_Age);

//Bind method allows us to create a copy of a function with a preset argument

let fullJapan = arrayCalculate(_age, isFull_Age.bind(this, 20));
console.log(_age);
console.log(fullJapan);


//Coding Challenge a simple game

//using invoked function so that no other code can not override this code

(function () {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question);

        for (let i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    };

    Question.prototype.checkAnswer = function (ans, callback) {
        let sc;
        if (ans === this.correct) {
            console.log('Correct answer!');
            //basically check score
            sc = callback(true);
        } else {
            console.log('Wrong answer.Try again..');
            sc = callback(false);
        }
        this.displayScore(sc);
    };

    Question.prototype.displayScore = function (score) {
        console.log('Your current score is : ' + score);
        console.log('------------------------------------');
    };

    let q1 = new Question('Is JavaScript the coolest programming language in the world', ['Yes', 'No'], 0);

    let q2 = new Question('What is the name of this course\'s teacher', ['John', 'Micheal', 'Jonas'], 2);

    let q3 = new Question('What does best describe coding', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);

    let questions = [q1, q2, q3];

    function score() {
        let sc = 0;
        return function (correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }

    let keepScore = score();

    function nextQuestion() {
        /*
        Here random function remember returns a number between zero,but we have to take the answers length.
         */
        let n = Math.floor(Math.random() * questions.length);

        questions[n].displayQuestion();

        let answer = prompt('Please select correct answer : ');

        if (answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
    }

    nextQuestion();
})();
