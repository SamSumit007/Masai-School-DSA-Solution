Given a binary array A of size n, find the maximum length of a contiguous subarray with equal number of 0 and 1.

time complexity should be O(n)


function BalSubArray(arr,n) {
 const map = new Map([[0, -1]]);

  let result = 0;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += arr[i] === 1 ? 1 : -1;

    if (map.has(sum)) {
      result = Math.max(result, i - map.get(sum));
    } else {
      map.set(sum, i);
    }
  }

  return result;   
}
         
function runProgram(input) {
 input = input.split("\n");
  var tc = +input[0];
  var line = 1;
   for(var i = 0; i < tc; i++){
      var n = +input[line++];
  var arr = input[line++].split(" ").map(Number);
     
     console.log(BalSubArray(arr,n));  
}}
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

