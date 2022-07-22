function runProgram(input) {
   var input = input.trim().split("\n");

   var N = +input[0];

   var sum = 0;
   var hrLine = 0;

        var arr1 = input[1].trim().split(" ").map(Number);

        var arr2 = input[2].trim().split(" ").map(Number);

        // console.log(arr2);

        while( hrLine < N){

            var S = +arr1[hrLine];
            var C = +arr2[hrLine];
            // console.log(S)

            sum += (S * C);

            hrLine++;
        }

        
        


        
   

   console.log(sum);
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`2
3 1
4 3`);
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