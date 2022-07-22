function sumLK(N, K, arr){
    // console.log(N, K, arr);

    // arr.sort();

   
    var sum = 0;
   for( var i = 0; i < N ; i++){
       if( arr[i] <= K){
           sum = sum + arr[i];
       }
   }

    console.log(sum);
}

function runProgram(input) {
   var input = input.trim().split("\n");
   
   var arr1 = input[0].trim().split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);

    var N = +arr1[0];
    var K = +arr1[1];
    
    sumLK(N, K, arr);
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`4 2
1 2 8 4`);
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