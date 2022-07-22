function NickHacks(N,amount ){
    // console.log(N);
   if(amount == N){
     return true;
   }
   if(amount > N){
     return false;
   }

  return NickHacks(N, amount*10) || NickHacks(N,amount*20);
}

function runProgram(input) {
   var input = input.trim().split("\n");

   var testCases = +input[0];

   var line = 1;
   for( var i = 0; i < testCases; i++){
       var N = +input[line].trim();
       line++;
     var amount = 1;
       NickHacks(N,amount);
     if (NickHacks(N, amount)) {
       console.log("Yes")
     } else {
       console.log("No");
     }
   }
  
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`5
1
2
10
25
200`);
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