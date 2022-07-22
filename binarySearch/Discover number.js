function dNumber(N, arr, D){


    // console.log(N, arr, D);


    let low = 0;

    let high = N-1;

    let ans = "NO";

    while( low <= high){

        let mid = Math.floor( low + (high - low)/2);

        if( arr[mid] == D){
            ans = "YES"
            return ans;
        }

        if( arr[mid] > D){

            high = mid -1;

        }else{
            low = mid + 1;
        }

    }

    return ans;

}


function runProgram(input) {
   var input = input.trim().split("\n")

   var arr1 = input[0].trim().split(" ").map(Number);

   var arr = input[1].trim().split(" ").map(Number);

   arr.sort();

   var N = +arr1[0];
   var q = +arr1[1];

   var line = 2;

   for(var i = 0; i < q; i++ ){

        var D = +input[line];

        line++;

      console.log(  dNumber(N, arr, D));

   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`5 10
    50 40 30 20 10
    10
    20
    30
    40
    50
    60
    70
    80
    90
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
      process.exit(0) ;
    });
  }