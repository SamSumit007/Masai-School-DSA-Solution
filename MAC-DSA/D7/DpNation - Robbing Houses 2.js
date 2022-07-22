
    function runProgram(input) {
   
     input = input.trim().split("\n");
     let tc = +input[0];
     let line = 1;
     for(let i = 0; i<tc; i++){
         let N = +input[line++];
         let arr = input[line++].trim().split(" ").map(Number);

         let prev = 0;
         let curr = 0;
         let element;
         for(let key of arr){
             element = curr;
             curr = Math.max(key + prev,curr);
             prev = element;
         }
         console.log(curr);
     }
  
    }
    if (process.env.USERNAME === "Ajit") {
        runProgram(`3
        2
        1 100
        3
        2 100 99
        4
        100 1 1 100`);
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