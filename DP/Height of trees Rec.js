function    heightT(N, arr, dp, curr){

  if( curr > N-1){
    return;
  }

    for(var i = 0; i < curr; i++){

      if(arr[curr] > arr[i]){

        dp[curr] = Math.max(dp[curr], dp[i]+1);

      }

    }

    return heightT(N, arr, dp, curr+1)
}

function runProgram(input) {
   var input = input.trim().split('\n');

   var N = +input[0];

   var dp = [];

   for(let i = 0; i < N; i++){

    dp[i] = 1;

   }
  //  console.log(dp);

   var arr = input[1].trim().split(" ").map(Number);
   var curr = 1

   heightT(N, arr, dp, curr);

   console.log(Math.max(...dp));
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`9
10 22 9 33 21 50 41 60 80`);
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