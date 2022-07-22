function optimise(a, b, c, k) {
  let ans = -1;
  let low = 0;
  let high = k;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    let eq = a * mid ** 2 + b * mid + c;
    if (eq >= k) {
      ans = mid;
      high = mid - 1;
    } else if (eq < k) low = mid + 1;
  }
  if (ans == 0) return -1;
  else return ans;
}

function runProgram(input) {
  let newInput = input.split("\n");
  let t = Number(newInput[0]);
  for (let i = 1; i <= t; i++) {
    let arr = newInput[i].trim().split(" ").map(Number);
    let A = arr[0];
    let B = arr[1];
    let C = arr[2];
    let K = arr[3];
    console.log(optimise(A, B, C, K));
  }
}
if (process.env.USERNAME === "getsu") {
  runProgram(`1
    3 2 4 15`);
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
