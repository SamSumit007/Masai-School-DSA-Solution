Alex has two integers x and y which he received from his two friends. Find out the hamming distance so that he can know how much different are these two integers from each other.

Hamming distance (between two strings of equal length) here is defined as the number of positions at which the corresponding bits are different.



function hammingDistance(x, y)
{
    let a = x ^ y;
    let ans = 0;
 
    while (a > 0) {
        ans += a & 1;
        a >>= 1;
    }
 
    return ans;
}


function runProgram(input) {
 input = input.split("\n")
  var tc = +input[0]
  var line = 1;
  
  for(var i = 0; i < tc; i++){
    
  var [x,y] = input[line++].trim().split(" ").map(Number);

    
     
     console.log(hammingDistance(x, y));  
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
