function minSortArr(N, arr){

    // console.log(N, arr);

    let low = 0;
    let high = N -1;
    let ans = arr[0];
    let ind = 0;

    while( low <= high ){

      let mid = Math.floor( ( high + low ) / 2);

     if( arr[mid] >= ans){

      low = mid +1;
     }else{
       ans = arr[mid];
       ind = mid;
       high = mid-1;
     }



    }
    return ind
}

function checkRA(N, arr){

  var count = 0;

  var mid = minSortArr(N, arr);
  // console.log(mid);

  if( mid == 0 ){
    return "NO";
  }

  var arrL = arr.slice(0, mid);
  var arrR = arr.slice(mid, N);

  // console.log(arrL, arrR)


  for(var i = 0; i < arrL.length; i++){

    if( arrL[i] > arrL[i+1]){
      return "NO"
    }

  }

  for(var i = 0; i < arrR.length; i++){

    if( arrR[i] > arrR[i+1]){
      return "NO"
    }

  }

return "YES"

}



function runProgram(input) {
   var input = input.trim().split("\n");

   var N = +input[0];
   var arr = input[1].trim().split(" ").map(Number);

  console.log(  checkRA(N, arr));

//    console.log(ans);

   

  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`6
3 4 7 9 1 2`);
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