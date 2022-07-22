function recLength(str,i){
    // return str

    if(str[i] == undefined){
        return 0;
    }
    

    return 1 +  recLength(str,i+1);


}



function runProgram(input) {
   var str = input.trim()
   var i = 0;
   
   console.log(recLength(str,i));
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`masaischool`);
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