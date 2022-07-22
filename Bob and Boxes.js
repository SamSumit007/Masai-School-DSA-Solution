function bobBox(N){
    // return N;

    if(N == 0){
        return 1;
    }
    if(N < 0){
        return 0;
    }

    
    return bobBox(N-1) + bobBox(N-3) + bobBox(N-5);
}


function runProgram(input) {
   var N = input;

   console.log(bobBox(N))
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`7`);
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