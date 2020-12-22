//simple array push
let arr = [1, 2, 3, 4, 5];
let newArray = [];
for (let i = 0; i < arr.length;i++){
    if (arr[i] % 2 === 1) {
        newArray.push(arr[i]);
    }
}
console.log('New Array = ' + newArray);

//same work is done by filter function
let numArray = arr.filter(function (value) {
    return value % 2 === 0;
});
console.log(numArray);

//how filter function works
function myFilter(arr, callback) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++){
        /*
        if (arr[i] % 2 == 0) {
            callback(arr[i]);
        }
        */
        if (callback(arr[i])) {
            newArray.push(arr[i]);
        }
    }
    return newArray
}
let myArr = myFilter(arr, function (element) {
   //console.log(element);
    return element % 2 == 1;
});
console.log('My filtered data are :  '+myArr);
