function BinaryS(N, K, arr){

    arr.sort((a, b) => {return a-b});

    // console.log(N, K, arr);

    let low = 0;

    let high = N-1;

    while( low <= high){

        let mid = Math.floor(( low + high )/2);

        if( arr[mid] == K ){

            return 1;
        }

        if( arr[mid] > K){

            high = mid - 1;


        }else{
            low = mid + 1;
        }

    }

    return -1;

}


function runProgram(input) {
   var input = input.trim().split("\n");

   var arr1 = input[0].trim().split(" ").map(Number);

   var arr = input[1].trim().split(" ").map(Number);
   

    var N = +arr1[0];
    var K = +arr1[1];

    console.log( BinaryS(N, K, arr));
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`5 0
2 -2 0 3 4`);
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