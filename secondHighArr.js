// function nextBiggest(arr) {
//     let max = -Infinity, result = -Infinity;
  
//     for (const value of arr) {
//       const nr = Number(value)
  
//       if (nr > max) {
//         [result, max] = [max, nr] // save previous max
//       } else if (nr < max && nr > result) {
//         result = nr; // new second biggest
//       }
//     }
  
//     return result;
//   }
  
//   const arr = ['20','120','111','215','54','78'];
//   console.log(nextBiggest(arr));
  // output = 120;

  // --------------- 2nd sol --------------
//var myArray = [1, 2, 4, 10, 20,100];
//   var biggest = myArray[0];
// var nextbiggest = myArray[0];
//     for(var i=0;i<myArray.length;i++){
//         if(myArray[i]>biggest){
//             nextbiggest = biggest;
//             biggest = myArray[i];
//         }
//         else if(myArray[i]>nextbiggest && myArray[i]!=biggest)
//             nextbiggest = myArray[i];
//     }
    
// console.log(nextbiggest);

// ------------ 3rd sol -----------

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