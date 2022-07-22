function NoWays(N){
    // return N;

    if( N < 0 ){
        return 0;
    }
    if( N == 0){
        return 1;
    }

    return NoWays(N - 1) + NoWays(N - 2) + NoWays(N-3);
}



function runProgram(input) {
    var N = +input;

    console.log(NoWays(N));
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`4`);
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