
function runProgram(input) {
    input = input.trim().split("\n");
    var cases = +input[0];
    var line = 1;
    for (var i = 0; i < cases; i++) {
        var n = +input[line++];
        var array1 = input[line++].trim().split(" ").map(Number).sort((a, b) => a - b);
        var array2 = input[line++].trim().split(" ").map(Number).sort((a, b) => a - b);
  
        var array3 = input[line++].trim().split(" ").map(Number).sort((a, b) => a - b);
      if (n === 0) console.log(0);
      else {
        console.log(array1[0] + array2[0] + array3[0]);
      }
    }
  }
if (process.env.USERNAME === "Ajit") {
    runProgram(`1
    3
    1 50 50
    50 50 50
    1 50 50`);
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