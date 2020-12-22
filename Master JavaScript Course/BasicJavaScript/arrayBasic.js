let str = "384y23rfbfuibs.jpg";
let temp = '';
for (let i = 0; i < str.length; i++){
    if (str.charAt(i) == '.') {
        return;
    } else {
        temp = temp + str.charAt(i);
    }
}
console.log(str.charAt(2));

var text = 'uololooo.jpg';
let temp1 = '';
// With ES6
[...text].forEach(c =>
{
    if (c != ".") {
       temp11 = temp + c;
    } else {
        return;
    }
});
console.log(temp1)

let t = (text.split('.'));
console.log(t[0]);