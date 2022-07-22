function  suchPR(N, K, arr){


// console.log(N, K, arr);

    arr.sort((a, b) => {return a-b});
    // console.log(arr);

    let left = 0;
    let right = N-1;

    while( left < right ){

        let ans = arr[left] + arr[right];

        if( ans == K ){
            return 1;
        }else if( ans > K){

            right--;

        }else{
            left++;
        }

    }

    return -1

}




function runProgram(input) {
   var input = input.trim().split("\n");

   var testCases = +input[0];
   var line = 1;

   for(var i = 0; i < testCases; i++){

        var [N, K] = input[line].trim().split(" ").map(Number);
        line++

        var arr = input[line].trim().split(" ").map(Number);

        line++;

      console.log(  suchPR(N, K, arr));


   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`1
7 4
1 2 1 6 -2 7 0`);
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