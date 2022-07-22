// https://oj.masaischool.com/contest/3517/problems
function runProgram(input) {
   
 input = input.trim().split("\n")
 var arr = input[0].split(" ").map(Number);
 // console.log(arr);
 console.log(MissingInteger(arr));
  
    }
    function MissingInteger(arr){
        var N = arr.length;
        var output = Math.floor((N+1) * (N+2) / 2);
        for(var i = 0; i<N; i++){
            output -= arr[i];
        }
        return output;
    }
    if (process.env.USERNAME === "Ajit") {
        runProgram(`4 5 1 3`);
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