function minSortArr(N, arr){

    // console.log(N, arr);

    let low = 0;
    let high = N -1;
    let ans = arr[0];

    while( low <= high ){

      let mid = Math.floor( ( high + low ) / 2);

     if( arr[mid] >= ans){

      low = mid +1;
     }else{
       ans = arr[mid];
       high = mid-1;
     }



    }
    return ans
}



function runProgram(input) {
   var input = input.trim().split('\n');

   var N = +input[0];

   var arr = input[1].trim().split(" ").map(Number);

  console.log( minSortArr(N, arr));
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`10
4 6 7 9 10 -1 0 1 2 3`);
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