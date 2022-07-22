

function runProgram(input) {
   
 input = input.trim().split("\n")
 var N = +input[0];
 var array = input[1].trim().split(" ").map(Number);
  // console.log(N, array)
  waveOfArray(N, array)
    }
    function waveOfArray(N, array){
        array.sort((a,b)=>{
            return a-b;
        })
        for(var i = 1; i<array.length; i+=2){
            var temp = arr[i]
            arr[i] = arr[i-1];
            arr[i-1] = temp;
        }
        console.log(arr.join(" "));
    }
    if (process.env.USERNAME === "Ajit") {
        runProgram(`10
        9 8 4 10 3 6 5 7 1 2`);
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