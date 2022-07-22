function nSA(N, k, arr){
    
    for( var i = 0; i < N-1; i++){
        for( var j = 0; j < N-i-1; j++){
            if( arr[j] % k > arr[j+1] % k){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    console.log(arr);
}

function runProgram(input) {
    
   var input = input.split("\n");
   var arr1 = input[0].split(" ").map(Number);
    var arr = input[1].split(" ").map(Number);

    var N = +arr1[0];
    var k = +arr1[1];

        nSA(N, k, arr);
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`5 6
12 18 17 65 46`);
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