function   cureD(N, sArr, mArr){

    // console.log(N, sArr, mArr);

    // let count = 0;

    for(var i = 0; i < N; i++){

        if( mArr[i] > sArr[i]){
            return "No";
        }

    }

    return "Yes"
}



function runProgram(input) {
   var input = input.trim().split('\n');

   var N = +input[0];

   var sArr = input[1].trim().split(" ").map(Number);

   var mArr = input[2].trim().split(" ").map(Number);

  console.log(  cureD(N, sArr, mArr))
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`5
41 56 12 45 89
10 10 10 10 10`);
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