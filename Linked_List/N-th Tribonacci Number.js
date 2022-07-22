function trib(N, dp){

    if(dp[N] != -1){
        return dp[N]
    }else{
     return  dp[N] = (trib(N-3, dp) + trib(N-2, dp) + trib(N-1, dp))
    }
}

function runProgram(input) {
   var input = input.trim().split("\n");

   let testCases = +input[0];

   let line = 1;

   for(let i = 0; i < testCases; i++){
        let N = +input[line];
        line++;
        
        let dp = [];

        for(let j = 0; j < N+1; j++){
            dp[j] = -1;
        }
        
        dp[0] = 0;
        dp[1] = 1;
        dp[2] = 1;
        // console.log(dp);
        // console.log(N);
        console.log(trib(N, dp));
   }
   
  }
  Infinity
  if (process.env.USERNAME === "siddhesh") {
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
      process.exit(0) ;
    });
  }