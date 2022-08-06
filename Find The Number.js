Given an array of N integers, you have to find the largest number whose Inverse* is also present in the array, and if no number is found return -1.

Sample Input 1                    Sample Output 1

2
6
4 5 -1 4 8 -8                         8
5
2 4 -5 6 -1                           -1


function largestNum(arr) {
    let res = 0;
    arr.sort((a, b) => a - b);
    let l = 0, r = arr.length - 1;
    while (l < r) {
    let sum = arr[l] + arr[r];
 
        if (sum == 0) {
            res = Math.max(res, Math.max(arr[l], arr[r]));
            return res;
        }
 
        else if (sum < 0) {
            l++;
        }
 
        else {
            r--;
        }
    }
    return "-1";
}


function runProgram(input) {
 input = input.split("\n");
  var tc = +input[0];
  var line = 1;
   for(var i = 0; i < tc; i++){
      var n = +input[line++];

      var arr = input[line++].split(" ").map(Number);
     
     console.log(largestNum(arr));  
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

