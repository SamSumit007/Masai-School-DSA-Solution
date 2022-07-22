


function smallestNEM(N, arr){

    // console.log(N, arr);

    var count = 0;
    var stack = [];
    var top = stack.length-1;
    
    for( var i =0; i< N; i++){
        while(stack[top] >= arr[i] && stack.length){
            stack.pop();
            top--;
        }
        if( stack.length){
            var ans = 0;
        } else{
            count++;
        }
        top++;
        stack[top] = arr[i]
    }
    console.log(count);
}



function runProgram(input) {
   var input = input.trim().split("\n");

   var N = +input[0];
   var arr = input[1].trim().split(" ").map(Number);

   smallestNEM(N, arr);
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`8
39 27 11 4 24 32 32 1`);
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