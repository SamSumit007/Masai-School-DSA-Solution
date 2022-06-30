// Alice is in a shopping mall to buy books, shirts and shoes. The mall has exactly N different shops and each shop contains all these three items at different prices. Alice has a plan which she will be following. As per her plan, she won't buy the same item from the current shop if she had already bought that item from the shop adjacent to the current shop.

// Alice wants to follow her strategy strictly but at the same time she wants to minimize the total money she spends on shopping. You are provided description about all N shops i.e costs of all three items in each shop. You need to help Alice find minimum money that she needs to spend such that she buys exactly one item from every shop.

function runProgram(input){
    var input=input.split("\n");
    var tc= +input[0];
    var line=1;
    for(var i=0;i<tc;i++){
        var n=input[line++];
        var arr=[];
        for(var j=0;j<n;j++){
            arr.push(input[line++].split(" ").map(Number));
        }
        solve(n,arr);
    }
}
function solve(n,values){
   // console.log(arr)
   var dp=[];
   for(var i=0;i<n;i++){
       dp.push([-1,-1,-1]);
   }
   
   for(var i=0;i<n;i++){
       for(var k=0;k<3;k++){
           if(i==0){
               dp[i][k]=values[i][k];
           }
           else{
               if(k==0){
                 dp[i][k]=values[i][k]+Math.min(dp[i-1][k+1],dp[i-1][k+2]);  
               }
               if(k==1){
                   dp[i][k]=values[i][k]+Math.min(dp[i-1][k-1],dp[i-1][k+1]);
               }
               if(k==2){
                   dp[i][k]=values[i][k]+Math.min(dp[i-1][k-2],dp[i-1][k-1]);
               }
           }
       }
   }
   //console.log(dp)
   var min=Infinity;
   for(var i=0;i<3;i++){
       if(dp[n-1][i]<min){
           min=dp[n-1][i];
       }
   }
   console.log(min);
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