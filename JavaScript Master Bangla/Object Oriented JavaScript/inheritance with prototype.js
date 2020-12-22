function Person() {
    this.name = 'Apple'
}

function Teacher() {
    //get the access of Person object 
    Person.call(this);
    this.subject = 'English'
}

let teacher = new Teacher();
console.log(teacher);
console.log(teacher.name);

//another example for prototypes
function People(name) {
    this.name = name;
}

People.prototype.printName = function () {
    console.log('Name : ' + this.name);
};

People.prototype.another = function () {
    console.log('This is another function');
};

function Student(name, id) {
    //here inheritance the People object
    People.call(this, name);
    this.id = id;
}

/**
 * inheritance the People prototype for the Student object.
 * Object.create return object from another object by creating.
 * override People constructor by Student constructor.
 */

//performance is better from the next process
//Student.prototype = Object.create(People.prototype);

//same thing done up statement
Object.setPrototypeOf(Student.prototype,People.prototype);

Student.prototype.constructor = Student;

let student = new Student('Minister', 1669);
console.log(student.name);
student.printName();
student.another();

// this is not copy when People object is changed
// share the reference
People.prototype.printName = function () {
    console.log(this.name + ' Not copied');
};
student.printName();


People.prototype.skill = 'JavaScript';
console.log(student.skill);
