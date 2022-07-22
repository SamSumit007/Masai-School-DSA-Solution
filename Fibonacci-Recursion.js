function fibRec(N){
    // console.log(N);
    
    if(N == 0 || N == 1){
        return N;
    }

    return fibRec(N-1) + fibRec(N-2); 

}


function runProgram(input) {
   var N = +input.trim();
   
   console.log(fibRec(N));
   
}
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`15`);
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