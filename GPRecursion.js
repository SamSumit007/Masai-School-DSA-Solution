function raisTO (a, b){
  var sum = 1;
  for(var i = 1; i <= b; i++){
    sum = a**i;
  }
  return sum;
}


function GPRecu(n, r, ans){
    if(n == 0){
      return 1;
    }
    var val = raisTO(r, n)
    var ans = (1/val + GPRecu(n-1, r, ans));
    return ans;
}


function runProgram(input) {
   var [n,r] = input.trim().split(" ").map(Number);
    var ans = 0;
    console.log(Number.parseFloat(GPRecu(n, r, ans)).toFixed(4));
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`3 5`);
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