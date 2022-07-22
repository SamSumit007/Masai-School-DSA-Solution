

function runProgram(input) {
   
    let input = input.trim().split("\n")
      let [r,c] = input[0].trim().split(" ").map(Number);
      let line = 1;
      let mat = [];
      for(let i = 0; i<r; i++){
          mat.push(input[line++].trim().split(" ").map(Number))
      }
            FlipEvenRow(mat);
    }
    function FlipEvenRow(mat){
        for(let i = 0; i<mat.length; i++){
            if(i%2 == 0){
                console.log(mat[i].join(" "));
            }else{
                let arr = mat[i];
                let res = "";
                for(let i= arr.length; i>=0; i--){
                    res += arr[i] +" ";
                }
                console.log(res);
            }
        }
    }
    if (process.env.USERNAME === "Ajit") {
        runProgram(`4 2
        1 2
        3 4
        5 6
        7 8
        `);
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