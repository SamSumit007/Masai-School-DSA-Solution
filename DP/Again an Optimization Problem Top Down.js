
function         againOp(valArr, wtArr, S, idx, dp){

// console.log(valArr, wtArr, S, idx, dp);

    if( S == 0 || idx == 0){
        return 0;
    }
    if(dp[idx][S] != -1){
        return dp[idx][S];
    }

    if( wtArr[idx-1] > S){
        return dp[idx][S] = againOp(valArr, wtArr, S, idx-1, dp);
    }else {
        return dp[idx][S] = Math.max( valArr[idx-1] + againOp(valArr, wtArr, S - wtArr[idx-1], idx-1, dp) , againOp(valArr, wtArr, S, idx-1, dp))

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
                dp[j][k] = -1;
            }
        }


      console.log(againOp(valArr, wtArr, S, idx, dp));

    //   console.log(dp);
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