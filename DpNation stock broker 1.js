
// on day i, price of element is pi

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.
// Example 2:

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.


function runProgram(input){
    var input=input.split("\n");
    var tc= +input[0];
    var line=1;
    for(var i=0;i<tc;i++){
        var n=+input[line++];
        var arr=input[line++].split(" ").map(Number);
        console.log(solve(n,arr));
    }    
}

function solve(n,arr){
    
        var maxDiff=arr[1]-arr[0];
        var min=arr[0];
        for(var i=1;i<n;i++){
            if(arr[i]-min>maxDiff){
                maxDiff=arr[i]-min;
                
            }
            if(arr[i]<min){
                min=arr[i];
            }
        }
        if(maxDiff==-1){
            maxDiff=0;
        }
        return maxDiff;
        
    
    
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