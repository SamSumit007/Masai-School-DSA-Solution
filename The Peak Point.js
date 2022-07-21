Given an array of size n. Array elements are in the range from 1 to n. In the given array, one number from set {1, 2, …n} is missing and one number occurs twice in the array. Find these two numbers.

Print the missing one first and then the repeated one with a space character in between them.

Expected Auxillary Space Complexity - O(1)

function PeakPoint(arr, n) {
      if (n == 1) return 0;
        if (arr[0] >= arr[1]) return 0;
        if (arr[n - 1] >= arr[n - 2]) return n - 1;

        for (var i = 1; i < n - 1; i++){
          if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) return i;
        }
      }

function runProgram(input){
    input=input.trim().split("\n");
     var T=+input[0];
    var line = 1;
   for(var i=0; i<T; i++){
      var n=+input[line++];
      var arr=input[line++].trim().split(" ").map(Number);   
      console.log(PeakPoint(arr, n));
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
