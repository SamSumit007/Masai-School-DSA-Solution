
 
 function   arrSumMax(N,arr){
    //  console.log(N, arr);

   arr.sort((a,b)=>{return a-b});
   
   let prev = -Infinity;

   let prevSum = 0;

   for(var i = 0; i < N; i++){

      let sum = (arr[i] * (N-i)) - (prevSum);

      if( sum > prev){
        prev = sum;
      }

      prevSum += arr[i]

   }

   console.log(prev);


 }



function runProgram(input) {
   var input = input.trim().split('\n');

   var testCases = +input[0];

   var line = 1;

   for(var i = 0; i < testCases; i++){
        
        var N = +input[line];
        line++;
        var arr = input[line].trim().split(" ").map(Number);

        line++;

        arrSumMax(N,arr)

   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`2
3
2 3 1
5
1 6 7 1 5`);
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