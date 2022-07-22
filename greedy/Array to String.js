function arrToS(N, arr){

    // console.log(N, arr);

    for(var i = 0; i< N; i++){

        if( arr[i] >= 0){
            arr[i] = arr[i];
        }else{
            arr[i] = 0;
        }

    }

    console.log(arr.join(""));

}



function runProgram(input) {
   var input = input.trim().split("\n");

   var N = +input[0];

   var arr = input[1].trim().split(" ").map(Number);

    arrToS(N, arr);
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`5
2 -4 6 8 -9`);
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