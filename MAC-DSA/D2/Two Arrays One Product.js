
function runProgram(input) {
   
    input = input.trim().split("\n")
    var tc = +input[0];
    var line = 1;
    for(var i = 0; i<tc; i++){
        var N = +input[line];
        line++;
        var arr1 = input[line].split(" ").map(Number);
        line++;
        var arr2 = input[line].split(" ").map(Number);
        line++;
        Product(N, arr1, arr2)
    }

}
  function         Product(N, arr1, arr2){
      for(var i= 0; i<N; i++){
          arr1.push(arr2[i]);
      }
      var res = 1;
      for(var i = 0; i<arr1.length; i++){
          res *= arr1[i];
      }
      console.log(res);
  }

if (process.env.USERNAME === "Ajit") {
    runProgram(`1
    3
    1 2 3
    2 3 1`);
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

