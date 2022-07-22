function runProgram(input) {
    var arr =input.trim().split(" ").map(Number)

   //  console.log(newInput);
   var start=0;
   var end=arr.length-1

   while(start<end){
       var temp=arr[start]
       arr[start]=arr[end]
       arr[end]=temp
       start++
       end--
   }
   console.log(arr);
   
}
if (process.env.USERNAME === "Ajit") {
  runProgram(`2 1 3 4 5`);
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