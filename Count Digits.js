function countD(N, arr){
    // console.log(N,arr);
    var o = 0;
    var s = 0;
    var z = 0;
    for(var i = 0; i < N; i++){
        if(arr[i] == 0){
            z++;
        }else if(arr[i] == 1){
            o++;
        }else if(arr[i] == 2){
            s++;
        }


    }
    console.log(z + " " + o +" "+ s)
}


function runProgram(input) {
   var input = input.trim().split("\n")

   var N = +input[0];
   var arr = input[1].trim().split(" ").map(Number);

    countD(N,arr);
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`10
0 1 0 1 1 1 0 2 2 0 `);
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