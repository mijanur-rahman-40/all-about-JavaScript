//simple foreach function
let arr = [1, 2, 3, 4, 5];
let value = arr.forEach(function (element,index){
    console.log('Element is : ' + element + ' Index = '+ index + ' arr '+ arr);
});

//same task is proceed with call back function
function loop(arr,callback) {
    for (let i = 0; i < arr.length; i++){
        callback(arr[i],i);
    }
}
loop(arr, function (element,i) {
    console.log('Element is : ' + element + ' Index : ' + i);
});