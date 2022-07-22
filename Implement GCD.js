function GCD(a, b){

    if( b == 0){
        return a;
    }
     return GCD(b, (a%b))

}

function runProgram(input) {
   var input = input.trim().split('\n');

   var testCases = +input[0];

   var line = 1

   for(var i = 0; i < testCases; i++){

        var [a, b] = input[line].trim().split(" ").map(Number);
        line++;

        
      console.log(  GCD(a, b));

        

   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`2
6 9
2 25`);
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