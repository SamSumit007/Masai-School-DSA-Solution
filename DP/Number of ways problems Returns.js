

function diffWays(N, dp){

    // console.log(dp);
    if(N < 0){
        return 0;
    }
    if(dp[N] != -1){
        return dp[N];
    }else{
        let X =  diffWays(N-1, dp);
        let Y = diffWays(N-3, dp);
        let Z = diffWays(N-4, dp)


        dp[N] = X + Y  + Z ;
    }
    

    return dp[N];

}


function runProgram(input) {
   var N = +input;


    function array(N){

    var dp = [];

    for(let i = 0; i <= N; i++){

        dp[i] = -1;

    }

    dp[0] = 1;

    // console.log(dp);

    return dp;
    
}

  let arr =  array(N)
//   console.log(arr);

 console.log( diffWays(N, arr));
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`5`);
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