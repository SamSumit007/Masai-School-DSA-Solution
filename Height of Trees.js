// You are given n trees and their heights. Your task is to write a program that calculates the maximum number of trees whose height is in increasing order. They need not be in continuous manner.

// For instance, if heights of 9 trees are 10, 22, 9, 33, 21, 50, 41, 60, 80. The maximum number of trees whose height is in increasing order is 6 : (10, 22, 33, 50, 60, 80).

// (9,21, 41, 60, 80) is also in increasing manner but you need to find the maximum number of trees whose height is increasing. So, the answer is 6

function runProgram(input){
    var input=input.split("\n");
    var n= +input[0]
    var arr=input[1].split(" ").map(Number);
    solve(n,arr);
  }
  function solve(n,arr){
      var dp=new Array(n).fill(1);
      
      for(var i=0;i<n;i++) {
            for(var j=i+1;j<n;j++) {
              if(arr[j]>arr[i]) {
                  dp[j]=Math.max(dp[j],dp[i]+1);
              }
          }
      }
  
  
  var max=0;
  for(var i=0;i<n;i++){
      if(max<dp[i]){
          max=dp[i];
      }
  }
  
  console.log(max)
      
      
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