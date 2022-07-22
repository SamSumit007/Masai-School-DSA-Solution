function wToZeros(N){
    // console.log(N);

    if (N < 0) {
        return 0;
    }
    if (N == 0) {
        return 1;
    }
    return wToZeros(N - 1) + wToZeros(N - 2) + wToZeros(N - 5);


}


function runProgram(input) {
   var input = input.trim().split("\n")

   var testCases = +input[0];

   var line = 1;
   for( var i = 0 ; i< testCases; i++){
       var N = +input[line];
       line++;

      console.log( wToZeros(N));
   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`1
4`);
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