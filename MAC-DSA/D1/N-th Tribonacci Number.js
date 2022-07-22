// N-th Tribonacci Number
//https://oj.masaischool.com/contest/3244/problem/01


function runProgram(input) {
    var input = input.trim().split("\n");
     var tc = +input[0];
     var line = 1;
     for(var i = 0; i<tc; i++){
         var n = +input[line++];
         var dp = new Array(n+1).fill(-1);
         // console.log(dp);
         console.log(tr(n,dp));
     }
    
  }
    
  function tr(n, dp){
      if(n == 1 || n == 0)
      return n;
      if(n == 2) return 1;

      if(dp[n] != -1){
          return dp[n];
      }else{
          dp[n] = tr(n-1, dp)+ tr(n-2, dp)+ tr(n-3, dp)
      }
      return dp[n];
  }
  if (process.env.USERNAME === "Ajit") {
      runProgram(`1
      4`);
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

