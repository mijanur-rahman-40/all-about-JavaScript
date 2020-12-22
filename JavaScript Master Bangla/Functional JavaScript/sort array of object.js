//some list of number
let arr = [67, 34, 21, 45, 6, 29, 38, 55, 76, 10];
//console.log(arr.sort());
/*
* basically javascript single sort function can not sort properly
* for proper sort we have to use anonymous function with the sort function
 */

arr.sort(function (a, b) {
    //return a - b;
    return b - a;
});
console.log(arr);
//object array sort
let people = [
    {name: 'apple', age: 22},
    {name: 'orange', age: 23},
    {name: 'x', age: 18},
    {name: 'y', age: 19},
    {name: 'potato', age: 33},
    {name: 'net', age: 27},
];
//sort by age
/*
people.sort(function (a, b) {
    return a.age - b.age;
});
console.log(people);
 */
//sort by name
people.sort(function (a, b) {
    if (a.name > b.name) {
        return 1;
    } else if (a.name < b.name) {
        return -1;
    } else {
        return 0;
    }
});
console.log(people);
