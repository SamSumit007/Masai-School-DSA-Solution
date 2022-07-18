Given an array A with n integers, find the length of the longest consecutive sequence possible.

More formally, select a subset from the given array which have consecutive elements and is the longest possible consecutive sequence after arranging them in order.

For example - [1,6,4,5,2]

Two possible consecutive sequence are -> 1,2 and -> 4,5,6.

So here the answer is 3.



function findLongestConseqSubseq(arr, n) {
        let ans = 0, count = 0;
 
        
        arr.sort(function (a, b) { return a - b; });
 
        var v = [];
        v.push(arr[0]);
 
       
        for (let i = 1; i < n; i++) {
            if (arr[i] != arr[i - 1])
                v.push(arr[i]);
        }
    
        for (let i = 0; i < v.length; i++) {
 
            if (i > 0 && v[i] == v[i - 1] + 1){
                count++;
            }
            else{
                count = 1;
            }
           
            ans = Math.max(ans, count);
        }
        return ans;
    }


function runProgram(input) {
  // Write code here
 input = input.split("\n")
  var tc = +input[0]
  var line = 1;
  
  for(var i = 0; i < tc; i++){
      var n = +input[line++];
   var arr = input[line++].split(" ").map(Number);
     
     console.log(findLongestConseqSubseq(arr, n));  
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
