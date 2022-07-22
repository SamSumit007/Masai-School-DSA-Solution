function sumENot(arr, N, S, dp, idx){

    // console.log(arr, N, S, dp, idx);

    for(let i = 1; i < N+1; i++){
        for(let j = 1; j < S+1; j++){

           if(arr[i-1] <= j){
               dp[i][j] = (dp[i-1][j-arr[i-1]] || dp[i-1][j])
           }else{
               dp[i][j] = dp[i-1][j]
           }
        }
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
        for(let j = 0; j < S+1; j++){
            dp[i][j] = -1;
        
        }
    }
    for(var i = 0; i < S+1; i++){
     dp[0][i] = false;
    }

    for(var i = 0; i < N+1; i++){
        dp[i][0] = true;
    }


//    console.log(arr);

   sumENot(arr, N, S, dp, idx)
// console.log(dp);
// console.log(dp[N][S]);

    if(dp[N][S]){
        console.log("yes");
    }else{
        console.log("no");
    }
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`2
1 100
2`)
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