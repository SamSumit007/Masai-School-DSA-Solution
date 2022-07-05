// Description

// You have decided to manage your expenses. In order to do that, you have arranged all your bills in the form of an array. Your monthly salary is K Rs. If the total expenditure that you make is more than your salary, print "Debt". If the total expenditure is less than your monthly salary, then print "Save". If the expenditure is equal to your salary, print "Neutral".


// Input
// The first line of the input contains N, the number of elements in the array. Next line contains N space separated integers, denoting the expenses. Last line of the test case contains K, your monthly salary.



// Constraints

// 1 <= N < 100

// 1 <= A[i] <= 10

// 1 <= K <= 1000


// Output
// Print the output as per the conditions mentioned in the problem statement.


// Sample Input 1 

// 5
// 1 2 3 4 5
// 16
// Sample Output 1

// Save
// Sample Input 2 

// 5
// 1 2 3 4 5
// 15
// Sample Output 2

// Neutral


//Enter code here
function MoneyM(arr,n,k) {
    var sum = 0;
    for(var i=0; i<n; i++){
      sum+= arr[i]; 
    } 
   // console.log(sum, k);
    if(sum < k){
        console.log("Save");
         
     }
   
     else  if(sum == k){
        console.log("Neutral");
        }
     else { 
      console.log("Debt"); 
    }
}


 function runProgram(input){
input= input.trim().split("\n");
var n = input[0];
  var arr = input[1].split(" ").map(Number);
  var k = input[2];
// console.log(n,arr,k);
  MoneyM(arr,n,k);
}  

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
