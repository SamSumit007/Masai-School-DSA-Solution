Input
The first line contains a number N which represents the length of the Piratedrome numbers which need to be printed.

Constraints

2 <= n <= 7

Output
Print all space-separated Piratedromes of length N in increasing order of their value.


Sample Input 1                                  Sample Output 1

    2                                       11 22 33 44 55 66 77 88 99 

function piratedromes(result, n, diff, ans) {
  if (n) {
    let ch = "0";
    if (result == "") {
      ch = "1";
    }
    while (ch <= "9") {
      let absDiff;
      if ((n & 1) != 0) {
        absDiff = diff + (ch - "0");
      } else {
        absDiff = diff - (ch - "0");
      }
      piratedromes(result + ch, n - 1, absDiff, ans);
      ch++;
    }
  } else if (n == 0 && Math.abs(diff) == 0) {
    ans.push(result);
  }
  return ans;
}

function runProgram(input) {
  num = +input.trim();
  console.log(piratedromes("", num, 0, []).join(" "));
}
if (process.env.USER === "Sumit") {
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

