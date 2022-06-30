// Given an array, A of m denominations of coins and given an amount n, find a number of unique ways to make the change from the given coin types.

//by DP
function runProgram(input){
    var input=input.split("\n");
    var size=input[0].split(" ").map(Number);
    var n=size[0];
    var m=size[1];
    var arr=input[1].split(" ").map(Number);
    solve(n,m,arr);
     
 }
 function solve(n,m,arr){
     
     //console.log(n,m,arr)
     var dp=[];
     for(var i=0;i<=m;i++){
         var a=[];
         for(var j=0;j<=n;j++){
             a.push(-1);
         }
         dp.push(a);
     }
     //console.log(dp);
     
     function noWays(arr,n,m){
         if(dp[m][n]!=-1){
             return dp[m][n];
         }
         if(n<=0){
             return 1;
         }
         if(m==0){
             return 0;
         }
         if(arr[m-1]>n){
             dp[m][n]=noWays(arr,n,m-1);
         }
         else{
             dp[m][n]=noWays(arr,n-arr[m-1],m)+noWays(arr,n,m-1)
         }
         return dp[m][n];
     }
     console.log(noWays(arr,n,m));
     
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

 // by Recursion but TLE
 function runProgram(input){
    var input=input.split("\n");
    var size=input[0].split(" ").map(Number);
    var n=size[0];
    var m=size[1];
    var arr=input[1].split(" ").map(Number);
    solve(n,m,arr);
     
 }
 function solve(n,m,arr){
     
     //console.log(n,m,arr)
     
     function noWays(arr,n,m){
         if(n<=0){
             return 1;
         }
         if(m==0){
             return 0;
         }
         if(arr[m-1]>n){
             return noWays(arr,n,m-1);
         }
         else{
             return noWays(arr,n-arr[m-1],m)+noWays(arr,n,m-1)
         }
         
     }
     console.log(noWays(arr,n,m));
     
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