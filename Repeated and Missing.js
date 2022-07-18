Description

Given an array of size n. Array elements are in the range from 1 to n. In the given array, one number from set {1, 2, …n} is missing and one number occurs twice in the array. Find these two numbers.

Print the missing one first and then the repeated one with a space character in between them.

Expected Auxillary Space Complexity - O(1)


Approach:
(Make two equations using sum and sum of squares)
Let x be the missing and y be the repeating element.
Let N is the size of array.
Get the sum of all numbers using formula S = N(N+1)/2
Get the sum of square of all numbers using formula Sum_Sq = N(N+1)(2N+1)/6
Iterate through a loop from i=1….N
S -= A[i]
Sum_Sq -= (A[i]*A[i])
It will give two equations 
x-y = S – (1) 
x^2 – y^2 = Sum_sq 
x+ y = (Sum_sq/S) – (2) 
 

 function  RepeatnMiss(A,n){
       let Sum_N = Math.floor((n * (n + 1)) / 2)
    let Sum_NSq = Math.floor((n * (n + 1) * (2 * n + 1))/6)
 
    let missingNumber = 0
    let repeating = 0
 
    for(let i=0;i<n;i++){
        Sum_N -= A[i]
        Sum_NSq -= A[i] * A[i]
    }
     
    missingNumber = Math.floor(Math.floor(Sum_N + Sum_NSq / Sum_N) / 2)
    repeating = missingNumber - Sum_N
 
    let ans = []
   
    ans.push(missingNumber);
     ans.push(repeating);
 
return ans;
 
}

function runProgram(input) {
  // Write code here
 input = input.split("\n")
  var tc = +input[0]
  var line = 1;
  
  for(var i = 0; i < tc; i++){
      var n = +input[line++];

      var A = input[line++].split(" ").map(Number);
     
    // console.log(n, arr);  
    let bag ="";
    let res = RepeatnMiss(A,n);
   for(let i of res){
    bag+= i+" ";
   }
    console.log(bag);
}}
if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}

