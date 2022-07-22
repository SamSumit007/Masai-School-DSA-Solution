function masaiM(N, dp){

    // return N;

    for(let key in dp){

      if( N == key){
        return dp[key]
      }
    }

    var direct = N;

    var split = masaiM( Math.floor(N/2), dp) + masaiM(Math.floor(N/3), dp) + masaiM( Math.floor(N/4), dp);

    dp[N] = Math.max(direct, split);

    return dp[N];

}


function runProgram(input) {
   var input = input.trim().split('\n');

    var line = 0;
    var dp = {};

    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 3;
    dp[4] = 4; 
    // console.log(input.length);

    for(let i = 0; i < input.length; i++){

        let N = +input[line];

        line++;

        console.log(masaiM(N, dp));


    }

    // console.log(dp);


   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`12
2`);
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

// let obj = {
//   "1":55,
//   "2":10

// }

// obj[3] = Math.max(10,50);

// for(let key in obj){

// if( key == 3){
//   console.log(obj[key]);
// }

// }

// console.log(obj);