var arr = [1, 2, 9, 4, 2, 1, 6, 5];
var N = 8;

var user = {};
var newArr = [];
for( var i = 0; i < arr.length; i++){
    user[arr[i]] = 1;
}
for( key in user){
    newArr.push(key);
}
function compareNumbers(a, b) {
    return a - b;
}
  newArr.sort(compareNumbers);
var out = "";

if( newArr.length < 3){
    console.log("Not Possible");
    console.log("Not Possible");
} else {
    console.log(newArr[0] + " " + newArr[1] + " " + newArr[2]);
    console.log(newArr[newArr.length - 3] + " " + newArr[newArr.length - 2] + " " + newArr[newArr.length - 1]);
}
