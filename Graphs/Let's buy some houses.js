function runProgram(input) {
   var input = input.trim().split('\n');

   let testCases = +input[0];

   let line = 1;

   for(let i = 0; i < testCases; i++){

    let N = +input[line];
    line++;

    let obj = {};

    for(let j = 0; j < N; j++){

        let [ X, Y] = input[line].trim().split(" ").map(Number);
            line++;

        if(obj[X] === undefined){
            obj[X] = 1;
        }else{
            obj[X]++;
        }

        if(obj[Y] === undefined){
            obj[Y] = 1;
        }else{
            obj[Y]++;
        }

    }

    let arr = [];
    for(key in obj){
        arr.push(key)
    }

    console.log(arr.length);
   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`1
3
1 2
2 3
1 3
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
      process.exit(0) ;
    });
  }