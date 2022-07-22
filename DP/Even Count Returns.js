function     evenCount(arr, dp){

    // console.log(arr);

    let count = 0;

    for(let i = 0; i< arr.length; i++){

        if(arr[i] %2 == 0){
            count++;
            dp[i] = count;
        }else{
            dp[i] = count;
        }

    }

    return dp.reverse().join(" ");
}   


function runProgram(input) {
   var arr = input.trim().split("").reverse();


    // console.log(arr);

    let dp = [];
   
     console.log(evenCount(arr, dp));   
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`574674546476`);
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