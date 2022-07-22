function    heightT(N, arr, dp){


  for(let i = 1; i < N; i++){

    
    for(let j = 0; j < i; j++){

      if(arr[i] > arr[j]){
        
        dp[i] = Math.max(dp[i], dp[j]+1)
      }
 
    }

  }
 
   return Math.max(...dp) 

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

  console.log( heightT(N, arr, dp));
   
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