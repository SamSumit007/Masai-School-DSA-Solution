// level 2
/* 1. Write a function to remove all even numbers from an Array.
```
Input array: 
[1, 3, 4, 6, 7, 8]
```
```
Output should be array: [1, 3, 7]
```
2. Replace all the vowels in a string with uppercase vowels.
```
Input string: 'Elie'
```
```
Output should be string: 'ElIE'
```
3. Write a function to find the maximum number in an array.
```
Input array: [1, 3, 4, 6, 7, 8, 2, 5]
```
```
Output should be a number: 8
``` */

// 1. Write a function to remove all even numbers from an Array.
let arr = [1, 3, 4, 6, 7, 8];
function removeEvenNum(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log("removeEvenNum(arr):", removeEvenNum(arr));

//2. Replace all the vowels in a string with uppercase vowels.

let str = "Elie";
function replaceVovels(str) {
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] === "a" ||
      arr[i] === "e" ||
      arr[i] === "i" ||
      arr[i] === "o" ||
      arr[i] === "u"
    ) {
      arr[i] = arr[i].toUpperCase();
    }
  }
  return arr.join("");
}
console.log("replaceVovels(str):", replaceVovels(str));

//3. Write a function to find the maximum number in an array.
let numArr = [1, 3, 4, 6, 7, 8];

function findMax(arr) {
  let max = -1;
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] > max) {
      max = numArr[i];
    }
  }
  return max;
}
console.log("findMax(arr):", findMax(arr));

// second largest in array 

function secondLargest(arr) {

  var max1st = arr[0];

  var max2nd = 0;

  
  for(var i=0; i<arr.length; i++) {

    if(arr[i] > max1st) {

      max2nd = max1st;

      max1st = arr[i];

    }

    else if(arr[i] > max2nd && arr[i] !== max1st) {

      max2nd = arr[i];

    }

  }

  return max2nd;

}


console.log(secondLargest([100,2,4,54,27,98,99]));

// print array to n times 

let array = [1,2,3];
var N = 3;
//out = [1,2,3,1,2,3,1,2,3];
var res = []
for(var i = 0; i<N; i++){
  for(var j = 0; j<array.length; j++){
    res.push(array[j]);
  }
}
console.log(res);

// sort array 

let arrr = [4,5,8,23,7];

// arrr.sort((a, b) => a - b);
arrr.sort((a, b) => b - a);

console.log(arrr);