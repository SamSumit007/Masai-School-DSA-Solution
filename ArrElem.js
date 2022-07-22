// var array = [1,2,3]

// for(var i = 0; i < array. length ; i++){
  
// console. log(array[i])
// }


// let arr = ["Jack", "John", "James"];

// for(let i = 0; i < arr.length; i++){
//   console.log(arr[i]);
// }


//-------------------------- recursion method --------------------

array = ['8', '17', '25', '42', '67'];
function recursivearray(array) {
  if (array.length > 0) {
    console.log(array.shift());
    recursivearray(array);
  }
}
recursivearray(array);