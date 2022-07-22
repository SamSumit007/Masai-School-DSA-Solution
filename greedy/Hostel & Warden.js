function    hostelW(N, curArr, goArr){

    // console.log(N, curArr, goArr);

    curArr.sort((a, b) => {return a-b});
    goArr.sort((a, b) => {return a-b});

    // console.log(curArr, goArr);

    var arr = [];

    for(var i = 0; i < N; i++){

      let time =   curArr[i] - goArr[i];

      arr.push(Math.abs(time))

    }

    // console.log(arr);

    arr.sort((a, b) => {return a-b});

    console.log(arr[arr.length-1]);



}



function runProgram(input) {
   var input = input.trim().split('\n');

   var N = +input[0];

   var  curArr = input[1].trim().split(" ").map(Number);

   var goArr = input[2].trim().split(" ").map(Number);

        hostelW(N, curArr, goArr);
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`3
4 -4 2
4 0 5`);
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