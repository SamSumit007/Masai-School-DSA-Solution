
// // Question - Given a string of lowercase alphabets, return a new string without any duplicate letters.

// // Example -
// // input = absdgfmavbeo
// // output = absdgfmveo


// // input = avvopqo
// // output = avopq


// function uniqueL(str){

//     let mySet = new Set();
//     let ans = "";

//     for(let i =0; i< str.length; i++){
//         if(!mySet.has(str[i])){
//             ans += str[i];
//             mySet.add(str[i])
//         }
//     }

//     return ans;

// }



// Question 2 - Given an array of n elements and q queries, find the number from the array which is just greater than the given number in each query.



// array = [1, 2, 3, 4, 5]
// queries = [3, 1]
// answer = [4, 2]

// tc = O(nlogn)+ O(n*q)


let str = [1, 2, 3, 4, 5];

let obj = {};

for(var i = 0;i < str.length; i++){

  if(obj[str[i]] == undefined){
    obj[str[i]] = 1;
  }else{
    obj[str[i]]++;
  }
}

console.log(obj);