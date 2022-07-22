function printTable(n){
    let str="";
    for(let i=1;i<=10;++i){
        str+= n*i+" "
    }
    console.log(str)
}



function runProgram(input) {
    // Write code here
    input= input.split("\n");
    let testcase=+input[0];
    let line=1;
    for(let i=0;i<testcase;i++){
        let n=+input[line++]
        printTable(n)
    }
   
  }
  if (process.env.USERNAME === "Ajit") {
    runProgram(`2
    2
    3`);
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