function BinaryS(N, K, arr, high, low){

    // console.log(N, K, arr, high, low);

    let mid = Math.floor((low + (high - low) / 2));

    if( low > high){
        return -1;
    }

    if( arr[mid] == K){
        return 1;
    }
    if( arr[mid] > K){

        return BinaryS(N, K, arr, mid - 1 , low)
    }else{

        return BinaryS(N, K, arr, high, mid + 1);
    }

    
}

function runProgram(input) {
   var input = input.trim().split("\n");

    var arr1 = input[0].trim().split(" ").map(Number);

    var arr = input[1].trim().split(" ").map(Number);


    var N = +arr1[0];
    var K = +arr1[1];

    var high = N-1;
    var low = 0;

    arr.sort((a,b) => {return a-b});

    console.log(BinaryS(N, K, arr , high, low));
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`5 6
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