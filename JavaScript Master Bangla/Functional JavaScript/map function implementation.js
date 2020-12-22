 let arr = [5, 9, 1, 2, 3, 4, 5, 6];
let mapArr = [];
for (let i = 0; i < arr.length; i++){
    mapArr.push(arr[i] + 2);
}
console.log('Mapped array : ' + mapArr);

//this same thing is worked by map function
let newArr = arr.map(function (value) {
    return value + 2; 
});
console.log(newArr);

//map function implementation
function myMap(arr,callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        let data = callback(arr[i]);
        newArr.push(data);
    }
    return newArr;
}
let myArr = myMap(arr, function (value) {
    return value + (5 - 2 * 3); 
});
console.log('My new array : ' + myArr);
