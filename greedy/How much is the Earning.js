function  howMuch(N, R, arr){

    // console.log(N, R, arr);

    let max = -Infinity;
    let count = 0;

    for(var i = 0; i < N; i++){

      if(arr[i] > max){

        max = arr[i];
        count++;

      }

    }

    console.log(count*R);

}


function runProgram(input) {
   var input = input.trim().split('\n');

   var testCases = +input[0];
   var line = 1;

   for(var i = 0; i < testCases; i++){

      var [N, R] = input[line].trim().split(" ").map(Number);
      line++;
      var arr = input[line].trim().split(" ").map(Number);
      line++;
        howMuch(N, R, arr);

   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`2
6 3
8 2 3 11 11 10
5 12
12 20 39 45 89`);
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