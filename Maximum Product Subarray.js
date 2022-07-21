Given an array A of size n of positive and negative integers, find a subarray (containing at least one number) with the maximum product.

function maxSubarrayProduct(arr, n) {
 let minVal = arr[0];
        let maxVal = arr[0];
       
        let maxProduct = arr[0];
       
        for (let i = 1; i < n; i++) {
            if (arr[i] < 0)
            {
                let temp = maxVal;
                maxVal = minVal;
                minVal =temp;
            }
            maxVal = Math.max(arr[i], maxVal * arr[i]);
            minVal = Math.min(arr[i], minVal * arr[i]);
                   maxProduct = Math.max(maxProduct, maxVal);
        }
       
        return maxProduct;
    }
function runProgram(input) {
 input = input.split("\n");
  var tc = +input[0];
  var line = 1;
   for(var i = 0; i < tc; i++){
      var n = +input[line++];
  
      var arr = input[line++].split(" ").map(Number);
     
     console.log(maxSubarrayProduct(arr, n));  
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


