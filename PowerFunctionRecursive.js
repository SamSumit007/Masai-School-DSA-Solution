function powerFRec(a, b){
    if(b < 0){
        return;
    }

    return a**b;
}


function runProgram(input) {
   var [a,b] = input.trim().split(" ").map(Number);

    console.log(powerFRec(a, b));
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`2 4`);
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