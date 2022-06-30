// The Tribonacci sequence Tn is defined as follows:

// T0= 0, T1= 1, T2= 1, and Tn+3= Tn+ Tn+1+ Tn+2 for n >= 0.

// Givenn, return the value of Tn

function runProgram(input){
    var input=input.split("\n");
    var tc= +input[0];
    var line=1;
    for(var i=0;i<tc;i++){
        var n=input[line++];
        solve(n);
    }
    
}
function solve(n){
    var dp=[];
    for(var i=0;i<=n;i++){
        dp.push(-1);
    }
    //console.log(dp)
    function tribo(n){
        if(n==0||n==1){
            return n;
        }
        if(n==2){
            return 1;
        }
        if(n<0){
            return 0;
        }
        if(dp[n]!=-1){
            return dp[n];
        }
        else{
            dp[n]=tribo(n-1)+tribo(n-2)+tribo(n-3);
            return dp[n];
        }
    }
    var ans=tribo(n);
    console.log(ans);
    
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