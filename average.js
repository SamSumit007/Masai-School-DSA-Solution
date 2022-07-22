function average(n,arr){
    var sum = 0;
  count=0;
  for(var i =0;i<n;i++){
    sum =sum +arr[i]
      count++;
    }
  console.log(Math.ceil(sum/count))
}


function runProgram(input) {
    // Write code here
    input=input.split("\n");
    let n=+input[0];
    let arr=input[1].trim().split(" ").map(Number);
    average(n,arr)
   
  }
  if (process.env.USERNAME === "Ajit") {
    runProgram(`3
    1 2 3`);
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