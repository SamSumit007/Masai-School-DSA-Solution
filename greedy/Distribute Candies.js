function    dCandy(N, arr, arrL, arrR){
    

    arrL[0] = 1;

    for(var i = 1; i < N; i++){

      arrL[i] = 1;

      if( arr[i] > arr[i-1]){

        arrL[i] = arrL[i-1] + 1;

      }


    }

    arrR[N-1] = 1;

    for(var i = N-2; i >= 0; i--){

      arrR[i] = 1;
      if( arr[i] > arr[i+1]){
        arrR[i] = arrR[i+1] +1;
      }


    }

    // console.log(arrL, arrR);

    let candy = 0;
    for(var i = 0; i < N; i++){

      if( arrL[i] > arrR[i]){
        candy += arrL[i];
      }else{
        candy += arrR[i];
      }

    }

    console.log(candy);

}


function runProgram(input) {
   var input = input.trim().split('\n')

   var testCases = +input[0];

   var line = 1;

   for(var i = 0; i < testCases; i++){

        var N = +input[line];
        line++;
        var arr = input[line].trim().split(" ").map(Number);

        line++;

        var arrL = [];
        var arrR = [];

        dCandy(N, arr, arrL, arrR);

   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`2
3 
1 0 2
3
1 2 2`);
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