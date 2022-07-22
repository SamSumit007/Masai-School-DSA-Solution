
function SumNot(arr, idx, S, dp){

    // console.log(arr, idx, S);

    if( S == 0){

        return true;
    }
    if( S < 0 || idx < 0){
        return false
    }
    if(dp[idx][S] != -1){
        return dp[idx][S]
    }else{
        return dp[idx][S] = (SumNot(arr, idx-1, S, dp) || SumNot(arr, idx-1, S - arr[idx-1], dp))
    }
}



function runProgram(input) {
   var input = input.trim().split("\n");

   let N = +input[0];
   let arr = input[1].trim().split(" ").map(Number);
   let S = +input[2];

   let idx = N;

   let dp = [];
   for(let i = 0; i < N+1; i++){
        dp[i] = [];
    for(let j = 0; j < S+1; j++)

    dp[i][j] = -1;

   }

//    console.log(dp);
   if(SumNot(arr, idx, S, dp)){
       console.log("yes");

   }else{
       console.log("no");
   }
//    console.log(dp);
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`3
1 5 2
10`)
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
      process.exit(0) ;
    });
  }