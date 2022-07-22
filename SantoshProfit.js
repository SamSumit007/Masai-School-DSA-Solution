function santProf(N){
    if( N < 0){
        return 0;
    }
    if( N == 0){
        return 1;
    }

    return santProf(N-4)+santProf(N-8);
}


function runProgram(input) {
   var input = input.trim().split("\n");

   var testCase = +input[0].trim();

   var line = 1;

   for( var i = 0; i < testCase; i++){
       var N = +input[line].trim();
       line++;

       console.log(santProf(N));
   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`1
12`);
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