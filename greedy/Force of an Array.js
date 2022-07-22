function    forceOfArr(arr, N, M){
   // console.log(arr, N, M);
    for(var i = 2; i < N; i++){
        arr[i] = ( (arr[i-1] + arr[i-2]) % M );
    }

    // console.log(arr);
    let obj = {};

    for(var i = 0; i < N; i++){

      if( obj[arr[i]] == undefined){
        obj[arr[i]] = 1;
      }else{
        obj[arr[i]]++;
      }

    }

    // console.log(obj);

    let sum = 0;
    for(key in obj){

      sum += ( obj[key] ** 2 )

    }

    console.log(sum);

}


function runProgram(input) {
   var input = input.trim().split('\n');

   var testCases = +input[0];

   var line = 1;
   for(var i = 0; i < testCases; i++){

        var bigArr = input[line].trim().split(" ").map(Number);

        var arr = bigArr.splice(0, 2);
        var N = +bigArr[0];
        var M = +bigArr[1];

        line++;
        forceOfArr(arr, N, M)

   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`2
0 1 6 4
1 1 4 2`);
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