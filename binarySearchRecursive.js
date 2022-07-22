function compare(a, b) {
  return a - b;
}

function binarySearch(arr, low, high, key) {
  if (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (arr[mid] == key) return 1;
    else if (arr[mid] > key) return binarySearch(arr, low, mid - 1, key);
    else return binarySearch(arr, mid + 1, high, key);
  }
  return -1;
}

function runProgram(input) {
  let newInput = input.trim().split("\n");
  let nk = newInput[0].trim().split(" ").map(Number);
  let arr = newInput[1].trim().split(" ").map(Number);
  let key = nk[1];
  arr.sort(compare);
  console.log(binarySearch(arr, 0, arr.length - 1, key));
}
if (process.env.USERNAME === "getsu") {
  runProgram(`5 0
    2 -2 0 3 4`);
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
