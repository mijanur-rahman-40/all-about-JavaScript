
//simple example
function name(firstName, lastName, gender) {
    let output;
    if (gender === 'male') {
        output = 'Mr ' + firstName + ' ' + lastName;
    } else if (gender === 'female') {
        output = 'Ms ' + firstName + ' ' + lastName;
    }
    return output;
}

let fullName = name('HM', 'APPLE', 'male');
console.log(fullName);

//some other example
//statement return
function state_example() {
    return (
        10 + 34 * 2
    );
}
console.log(state_example());
//object return
function object_example() {
    return {
        name: 'APPLE',
        skill: ['java', 'JavaScript', 'C++'],
        print: function () {
            console.log(this.name,this.skill);
        }
   }
}
let obj = object_example();
console.log(obj);
obj.print()

//return array
function array_example() {
    return (
        ['apple', 'boy', 'girl']
    );
}
console.log(array_example());


