//Enter code here
function runProgram(input) {
    var input = input.trim().split("\n")
   var N = +input[0];
   RaiseTo(N);
   
    }
    function RaiseTo(N){
        console.log(N*N*N*N);
    }
    if (process.env.USERNAME === "Ajit") {
        runProgram(`2`);
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
        process.exit(0);
      });
    }