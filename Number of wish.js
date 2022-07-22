function numbOfWish(N, arr){
    // console.log(arr);
    var count = 0;
   for(var i = 0; i < N; i++){
       if(arr[i] == "w" || arr[i] == "i" || arr[i] == "s" || arr[i] == "h"){
           count++;
       }
   }
   var x = count /4;
   console.log(Math.floor(x));
}


function runProgram(input) {
   var input = input.trim().split("\n");

   var testcases = +input[0];

   var line = 1;

   for(var i = 0; i < testcases; i++){
       var N = +input[line];
       line++;
       var arr = input[line].trim().split("");
       line++;

       numbOfWish(N,arr);
   }   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`2
7
wishash
8
wishwish`);
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