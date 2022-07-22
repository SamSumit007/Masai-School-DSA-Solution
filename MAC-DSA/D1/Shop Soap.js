//Enter code here
function runProgram(input) {
    
   
}

  if (process.env.USERNAME === "Ajit") {
      runProgram(`5
1 4 10 5 6
4
2
3
5
11`);
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


  //var newInput = input.split(" ");
//var input = input.trim().split("\n")
