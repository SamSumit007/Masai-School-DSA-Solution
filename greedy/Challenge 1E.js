function     challenge(N, arrN, M, arrM){

    // console.log(N, arrN, M, arrM);

    arrM.sort((a,b)=>{return a-b});
    // console.log(arrM);
    let max = arrM[arrM.length-1];
    // console.log(max);

    let sum = 0;

    for(var i = 0; i < N; i++){

        if( arrN[i] <= max){
            sum += ((max+1) - arrN[i]);
        }

    }
    console.log(sum);

}


function runProgram(input) {
   var input = input.trim().split('\n');

   var line = 0;

   var N = +input[line];
   line++;
   var arrN = input[line].trim().split(' ').map(Number);
   line++;
   var M = input[line].trim().split(' ').map(Number);
   line++;
   var arrM = input[line].trim().split(' ').map(Number);
    line++;
    challenge(N, arrN, M, arrM);

  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`3
1 3 10
2
3 4`);
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