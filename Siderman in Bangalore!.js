// There are N buildings in Bangalore, numbered 1,2,…,N. For each i (1≤i≤N), the height of building i is hi.

// After visiting Patna, Spiderman has come to visit Bangalore and as you know he has a superpower of jumping from one building to the other

// He is initially on building 1. He will repeat the following action some number of times to reach building N:

// If the spiderman is currently on building i, jump to one of the following: Building i+1,i+2,…,i+K. Here, a cost of |hi−hj| is incurred, where j is the building to land on.

// (|hi - hj| is the absolute difference between the heights of buildings)

// Find the minimum possible total cost incurred before the Spiderman reaches building N.

function runProgram(input){
    var input=input.split("\n");
    var [n,k]=input[0].split(" ").map(Number);
    var arr=input[1].split(" ").map(Number);
    solve(n,k,arr);
}
function solve(n,k,arr){
    var dp=new Array(n).fill(Infinity);
    // console.log(dp);
    //     console.log(n,k,arr);
    dp[0]=0;
    for(var i=1;i<n;i++){
        for(var j=0;j<i;j++){
            if(i<=j+k){
                dp[i]=Math.min(dp[i],dp[j]+Math.abs(arr[j]-arr[i]));
            }
        }
    }

    console.log(dp[n-1]);
    
    
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