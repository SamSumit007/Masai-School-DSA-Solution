

function   simText( arr1, idx1,  arr2, idx2, dp){

    // console.log( arr1, idx1,  arr2, idx2, dp);

    

  if( idx1 == 0 || idx2 == 0){
        return dp[idx1][idx2] = 0;
    }
    
    if(dp[idx1][idx2] != -1){
      return dp[idx1][idx2];  
    }else{

      if( arr1[idx1-1] == arr2[idx2-1]){
        return dp[idx1][idx2] = 1 + simText(arr1, idx1-1, arr2, idx2-1, dp);
      }else{

        let opt1 = simText(arr1, idx1-1, arr2, idx2, dp);
        let opt2 = simText(arr1, idx1, arr2, idx2-1, dp);

        return dp[idx1][idx2] = Math.max(opt1, opt2);
      }

    }

    

}


function runProgram(input) {
   var input = input.trim().split("\n");

   let arr1 = input[0].trim().split("");

   let arr2 =  input[1].trim().split("");

   let N = arr1.length;

   let M = arr2.length;


   let dp = [];

   for(let i = 0; i < M+1; i++){
      dp[i] = [];
    for(let j = 0; j < N+1; j++){

        dp[i][j] = -1;

    }

   }

  //  console.log(dp);

 
 console.log(simText(arr1, N, arr2, M, dp));  //for REC

 console.log(dp);
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`AEDFHR
ABCDGH`);
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
