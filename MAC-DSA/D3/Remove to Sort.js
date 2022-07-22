//https://oj.masaischool.com/contest/3380/problem/01

function runProgram(input) {

    var input = input.trim().split("\n")
    //var k = +input[0].trim()
    var N = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    RemoveSort(N, arr);
   
}
function  RemoveSort(N, arr){
   // console.log(N, arr);
   var arr1 = [];
   var count = -Infinity;

   for(var i = 0; i<N; i++){
       if(arr[i] >= count){
arr1.push(arr[i]);
count = arr[i];
       }
   }
   console.log(arr1.join(" "));
}
if (process.env.USERNAME === "Ajit") {
    runProgram(`10
    1 2 4 3 5 7 8 6 9 10`);
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