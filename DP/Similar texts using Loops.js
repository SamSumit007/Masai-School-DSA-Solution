


function lcs(arr1, arr2, N, M, dp){

    for(var i = 0; i <= N; i++){
        for(var j = 0; j <= M; j++){

            if(i == 0 || j == 0){
                dp[i][j] = 0;
            }
            else if (arr1[i-1] == arr2[j-1]){
                dp[i][j] = dp[i-1][j-1] + 1;
            }else{
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
            }

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

   for(let i = 0; i < N+1; i++){
      dp[i] = [];
    for(let j = 0; j < M+1; j++){

        dp[i][j] = -1;

    }

   }

//    console.log(dp);

   lcs(arr1, arr2, N, M, dp);
 
// console.log(dp);
 console.log(dp[N][M]);
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`ghajf
mnmaqq`);
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
