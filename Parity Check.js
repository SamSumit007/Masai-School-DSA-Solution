// Given an array containing N elements, you have to find the absolute difference between the number of odd and even elements in an array.

function runProgram(input){
    var input=input.split("\n");
    var n= +input[0];
    var arr=input[1].split(" ").map(Number);
    solve(n,arr);
    
}
function solve(n,arr){
    var even=0;
    for(var i=0;i<n;i++){
        if(arr[i]%2==0){
            even++;
        }
    }
    var odd=n-even;
    console.log(Math.abs(even-odd));
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