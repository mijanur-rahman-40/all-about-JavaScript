let arr = [5, 9, 1, 2, 3, 4, 5, 6];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);

//same thing is done by reduce function
//reduce array traverse one by one the full array
let i = 0;
let result = arr.reduce(function (a, b) {
    return a + b;
});
console.log('Result : ' + result);