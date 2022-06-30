// In Masai, they have a very strange monetary system.

// Each Masaian gold coin has an integer number written on it. A coin n can be exchanged in a bank into three coins: n/2, n/3 and n/4. But these numbers are all rounded down (the banks have to make a profit).

// You can also sell Masaian coins for Indian Rupees. The exchange rate is 1:1. But you can not buy Masaian coins.

// You have one gold coin. What is the maximum amount of Indian Rupees you can get for it?

//done but memory limit exceed
function runProgram(input){
    var  input=input.split("\n");
    for(var i=0;i<input.length;i++){
        var money= +input[i];
        solve(money);
    }
    
}
function solve(money){
    
    var dp=[];
    for(var i=0;i<=money;i++){
        dp.push(-1);
    }
    function system(n){
        if (n <= 0)
        {
            return 0;
            
        }
        if (dp[n] != -1)
        {
            return dp[n];
            
        }
        else{
            dp[n]=Math.max(n,system(Math.floor(n/2))+system(Math.floor(n/3))+system(Math.floor(n/4)));;
        }
       
        return dp[n];
    }
    console.log(system(money))
    //console.log(money)
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

//accepted by object

function runProgram(input){
  var  input=input.split("\n");
  for(var i=0;i<input.length;i++){
      var money= +input[i];
      solve(money);
  }
  
}
function solve(money){
  var dp={};
  // console.log(dp)
 function system(n){
     if(n==0||n==1||n==2||n==3||n==4){
         return n;
     }
     
     if(n in dp){
         return dp[n];
     }
    
      dp[n]=Math.max(n,system(Math.floor(n/2))+system(Math.floor(n/3))+system(Math.floor(n/4)));
      return dp[n];
     
    
 }
 
 console.log(system(money));
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