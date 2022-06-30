// Given an array of length n, and it is sorted and rotated at some unknown point, find the minimum element in it.

function runProgram(input){
    input = input.split("\n");
    var n = +input[0];
    var arr = input[1].split(" ").map(Number);
    solve(n,arr);
}
function solve(n,arr){
  let low = 0;
    let high = n-1;
    while (low < high) {
        let mid = Math.floor(low + (high - low) / 2);
        if (arr[mid] >= arr[high]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    console.log(arr[low]);
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