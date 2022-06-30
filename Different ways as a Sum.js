// Let us say that you are given a number N, you've to find the number of different ways to write it as the sum of 1, 3 and 4.

// For example, if N = 5, the answer would be 6.

// 1 + 1 + 1 + 1 + 1

// 1 + 4

// 4 + 1

// 1 + 1 + 3

// 1 + 3 + 1

// 3 + 1 + 1


function runProgram(input){
    solve(+input);
    
}
function solve(n){
    var dp=[];
    for(var i=0;i<=n;i++){
        dp.push(-1);
    }
    function waySum(n){
        
        if(n==0){
            return 1;
        }
        if(n<0){
            return 0;
        }
        
        if(dp[n]!= -1){
            return dp[n];
        }
        else{
          dp[n]=waySum(n-1)+waySum(n-3)+waySum(n-4);
           return dp[n];
        }
       
    }
    
    console.log(waySum(n));
    
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