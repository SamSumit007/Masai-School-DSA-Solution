
  function factorial(n) {
    if (n == 0 || n == 1) return 1
    return n * factorial(n - 1)
  }




function runProgram(input) {
    var n = +input;

  console.log(factorial(n));
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`6`);
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


// function checkPalindrome(str, left, right) {
//   if (left == right) return true
//   if (str[left] != str[right]) return false
//   return checkPalindrome(str, left + 1, right - 1)
// }
// checkPalindrome(aman,0,)