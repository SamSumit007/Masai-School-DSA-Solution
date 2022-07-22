function findit(array,n){
  let stack = [], res = [];
  stack.push(0),res.push(1);
  for(let i = 1;i< n;i++){
    while(stack.length > 0 && array[stack[stack.length-1]] <= array[i]){
      stack.pop();
    }
    if(stack.length == 0){
      res.push(i+1)
    }
    else{
      res.push(i - stack[stack.length-1])
    }
    stack.push(i)
  }console.log(res.join(' '));
  }
  
  function runProgram(input) {
   input = input.trim().split('\n')
   let cases = +input[0]
   let line = 1;
   for(let i = 0; i < cases; i++){
   let n = +input[line++]
   let array = input[line++].trim().split(' ').map(Number)
   findit(array,n)
   }
    }
    if (process.env.USERNAME === "Ajit") {
        runProgram(`4
        10 12 14 15
        12 14 16 18
        100`);
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