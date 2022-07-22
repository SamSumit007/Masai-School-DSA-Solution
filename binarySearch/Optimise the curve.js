function optCurve(a, b, c, K){


  let low = 0;

  let high = K;

  let ans = -1;

  while( low <= high ){

    let mid = Math.floor( low + ( high - low)/2 );

    let value = ( a * mid * mid) + ( b * mid) + ( c );

    

    if( value >= K){

      if( mid == 0){
        ans = -1;
      }else{
        ans = mid;
      }
      

      high = mid -1;

    }else{

      low = mid +1;

    }

  }

  return ans;

}




function runProgram(input) {
   var input = input.trim().split("\n");
   var testCases = +input[0];

   var line = 1;

   for(var i = 0; i < testCases; i++){

        var arr = input[line].trim().split(" ").map(Number);
    // console.log(arr);
        var a = +arr[0];
        var b = +arr[1];
        var c = +arr[2];
        var K = +arr[3];

        line++;        

        console.log(  optCurve(a, b, c, K));

    }

   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`3
3 2 4 15
4 8 5 25
9 79 36 16`);
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