function     spiderMan(N, K, arr){

    let sum = 0;
    for(let i = 0; i < N; i++){

        if( K > 0){
        i += arr[i] - 10;
        K--;
        sum += Math.abs(arr[i] - arr[i + (arr[i]-10) % N]);
        }
        

    }

    console.log(sum);

}


function runProgram(input) {
   var input = input.trim().split("\n");

   var [N, K] = input[0].trim().split(" ").map(Number);

   var arr = input[1].trim().split(" ").map(Number);

    spiderMan(N, K, arr)
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`5 3
10 30 40 50 20`);
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