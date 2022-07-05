// You are given n different numbers and an integer k. Write a program that finds number of times k is present in log(n) time complexity.
function runProgram(input){
    input=input.trim().split("\n");
    
    var [n,k]=input[0].trim().split(" ")
    var arr=input[1].trim().split(" ").map(Number)
    console.log(f(arr,k));
    }

function f(arr,k){
    var n = 0;
    for(i = 0; i < arr.length; i++){
        if(arr[i] == k){n++}
    }
    return n;
}






if (process.env.USER === "") {
  runProgram(``);
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
    process.exit(0);
  });
}
