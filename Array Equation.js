function arrEqu(N, arr){

    var sumE = 0;
    var sumO = 0;
    for(var i = 0; i < N; i++){

        if(arr[i] % 2 == 0){
            sumE += arr[i]
        }else{
            sumO += arr[i];
        }

        

    }

    console.log((2*sumE + 3*sumO))


}


function runProgram(input) {
   var input = input.trim().split("\n");

   var N = +input[0];
   var arr = input[1].trim().split(" ").map(Number);

    arrEqu(N,arr);
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`5
1 2 3 4 5`);
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