
function warMin(N,arr){
    var stack = [];
    

    for (var i = 0; i < N; i++) {
        if (stack.length > 0 && arr[i] == stack[stack.length - 1]) {
            stack.pop();

        }  
        else{
            stack.push(arr[i])
        }

    }

    if(stack.length == 0){
        console.log("-1")
    }else{
        console.log(stack.join(""));
    }

}


function runProgram(input) {
   var input = input.trim().split("\n");
   var N = +input[0];
   var arr = input[1].trim().split("");

   warMin(N,arr);
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`12
abbabaadcbbc`);
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