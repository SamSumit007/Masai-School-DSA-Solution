

function fib(N, dp){

    if(dp[N] != -1){
        return dp[N];
    }else{
        var x = fib(N-1, dp);
        var y = fib(N-2, dp);

    }
    
    dp[N] = x + y;
    // console.log(dp)

    return dp[N];
   

}


function runProgram(input) {
   var N = +input;


    function array(N){

        var dp = [];

        for(let i = 0; i <= N; i++){

            dp[i] = -1;

        }

        dp[0] = 0;
        dp[1] = 1;

        // console.log(dp);

        return dp;
    
    }

  let arr =  array(N)
//   console.log(arr);

 console.log( fib(N, arr));
   
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