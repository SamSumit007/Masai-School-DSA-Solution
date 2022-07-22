function runProgram(input) {
    
    var input = +input;

    var count = 0;
        var sum = 0;
        var totalSum = 0;
    for( var i =1 ; i <= 10000; i++){
        sum = sum + i;
        totalSum = totalSum + sum;
        if(totalSum >= input){
            break;
        }
        count++
    }
    console.log(count);
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`25`);
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