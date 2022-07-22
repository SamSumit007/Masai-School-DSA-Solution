function dString(N, arr){
    // console.log(N,arr)
    var newAns = "";
    for(var i = 0; i < N ; i++){
        for(var j = 0; j < arr[i+1]; j++){
            newAns += arr[i];
        }
    }

    console.log(newAns);
}


function runProgram(input) {
   var input = input.trim().split("\n");
   var testCases = +input[0];

   var line = 1;
   for(var i = 0; i < testCases; i++){
       var N = +input[line];
       line++;
       var arr = input[line].trim().split("");
       line++;

       dString(N,arr);
   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`2
6
a2b1c2
6
a2z1a2`);
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