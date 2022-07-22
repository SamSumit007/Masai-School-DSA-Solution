 
function runProgram(input) {
    var newINput = input.split(" ");
    var N = Number(newINput[0]);
    var M = Number(newINput[1]);
    for (let i = 1; i <= 2 * N;i++)
    {
        var temp = "";
        temp += "+";
        for (let j = 1; j <= M;j++)
        {
            temp += "/\\";

        }
        temp += "+";
        console.log(temp);
    }
     
  }
  if (process.env.USERNAME === "Ajit") {
    runProgram(`3 4`);
     
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
  