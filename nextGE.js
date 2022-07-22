function nextGE(N, arr){
    var stack = [];
    var ans = [];
    

    for( var i = N-1; i >= 0; i--){
        while( stack.length > 0 && arr[i] >= stack[stack.length - 1]){
            stack.pop();
            
        } if( stack.length == 0){
           ans[i] = -1;
        } else{
            ans[i] = stack[stack.length-1]
        }
        
        stack.push(arr[i])

    }

    
    console.log(ans.join(" "));
   
}

function runProgram(input) {
    var input = input.trim().split("\n");

    var testCases = +input[0];

    var line = 1;
    for (var i = 0; i < testCases; i++) {
        var N = +input[line];
        line++;
        var arr = input[line].trim().split(" ").map(Number);
        line++;
       
        nextGE(N, arr);
    
   
  }
}
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`1
4
1 3 2 4`);
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