
function runProgram(input) {
   var input = input.trim().split("\n")

   let testCases = +input[0];

   let line = 1;

   for(let i = 0; i < testCases; i++){

    let [N, M] = input[line].trim().split(" ").map(Number);
    line++;
    let arr = [];

    for(let j = 0; j < N; j++){
      
      let eachRow = input[line].trim().split(" ").map(Number);
      line++;

      arr.push(eachRow);

    }

    // console.log(arr);
    // console.log(N, M);

    let dp = [];
    dp[0] = arr[0]
    for(let i = 1; i < N; i++){
      dp[i] = [];
      for(let j = 0; j < M; j++){

        dp[i][j] = 0;

      }
      
    }
    // console.log(dp);

    noBoard(arr, dp, N, M);
    let ans = dp[N-1].sort((a,b)=>{return a-b})
        console.log(ans[ans.length-1]);
   }

   
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`1
6 5
3 1 7 4 2
2 1 3 1 1
1 2 2 1 8
2 2 1 5 3
2 1 4 4 4
5 2 7 5 1`);
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