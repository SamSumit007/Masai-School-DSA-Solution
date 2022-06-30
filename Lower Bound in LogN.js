// You are given n different numbers and an integer k. Write a program that finds lower bound of k in log(n) time complexity. 
// Lower bound of a number k in a sorted list is the index of the first number which is same as k, in case the number is not present, 
// print -1 (here the answer is given considering index to be starting from 0)

function runProgram(input){
    var input=input.split("\n");
    var size=input[0].split(" ").map(Number);
    var n=size[0];
    var k=size[1];
    var arr=input[1].split(" ").map(Number);
    solve(n,k,arr);
    
}
function solve(n,k,arr){
    
    var first=firstO(arr,k);
    console.log(first);
    
}
function firstO(arr,k){
    let low=0;
    let high=arr.length-1;
    let result=-1;
    while(low<=high){
        var mid= Math.floor(low+(high-low)/2);
        if(arr[mid]==k){
            result=mid;
            high=mid-1;
        }
        else if(arr[mid]<k){
            low=mid+1;
        }
        else{
            high=mid-1;
        }
    }
    return result;
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