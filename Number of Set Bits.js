Given an integer output the count of Set Bits present in it's binary representation.



Note:Set bitsin a binary number is represented by 1, also the input will not exceed 32-bit integer range.


Input
Input Format:
The First line of input will contain T, number of Test Cases

Each Test Case will contain a Single integer N



Constraints:

1<= T <= 10

0<= N <= 2^32-1


Output
For each test case output the count of set bits present in N, in a new line


Sample Input 1 

4
1
3
7
6
Sample Output 1

1
2
3
2


function NumberofSetBits(n){
    if (n == 0){
        return 0;
    }
    else{
        return (n & 1) + NumberofSetBits(n >> 1);
    }
}
 function runProgram(input) {
  // Write code here
 input = input.split("\n");
  var tc = +input[0]
  var line = 1;
  for(var i = 0; i < tc; i++){
      var n = +input[line++];
 
     console.log(NumberofSetBits(n));  
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
