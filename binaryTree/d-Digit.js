function digitD(arr, K){
    // console.log(arr, K);
    let count = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === K){
            count++
        }
    }

    return count;
}

function runProgram(input) {
   var input = input.trim().split(" ");

    let arr = input[0].trim().split("").map(Number);

    let K = +input[1];

   console.log( digitD(arr, K));
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`124577 4`);
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