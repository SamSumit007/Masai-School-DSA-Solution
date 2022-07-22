
function againOp(valArr, wtArr, S, N, dp){

    // console.log(valArr, wtArr, S, N, idx, dp);

    for(let i = 1; i < N+1; i++){
        for(let j = 1; j < S+1; j++){

            if(wtArr[i-1] > j){
                dp[i][j] = dp[i-1][j]
            }else{
                dp[i][j] = Math.max(valArr[i-1] + dp[i-1][j-wtArr[i-1]], dp[i-1][j])
            }

        }
    }
}


function runProgram(input) {
   var input = input.trim().split("\n");

   let testCases = +input[0];

   let line = 1;

   let [S, N] = input[line].trim().split(" ").map(Number);
    line++;

    for(var i = 0; i < testCases; i++){

    
        let valArr = [];
        let wtArr = [];

        for(let i = 0; i < N; i++){

            [w, v] = input[line].trim().split(" ").map(Number);

            valArr.push(v);
            wtArr.push(w);
            line++;

        }

        let dp = [];
        let idx = N ;

        for(let j = 0; j < wtArr.length+1; j++){
            dp[j] = [];
            for(let k = 0; k < S+1; k++){
                dp[j][k] = 0;
            }
        }


      againOp(valArr, wtArr, S, N, dp);

      console.log(dp[N][S]);
    }
   
  }

  if (process.env.USERNAME === "siddhesh") {
    runProgram(`1
4 5
1 8
2 4
3 0
2 5
2 3`);
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