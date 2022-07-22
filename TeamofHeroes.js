function tOHeros(N, K, arr){

    // console.log(N, K, arr);

    var left = 0;
    var right = N-1;
    var count = 0;

    while(left < right){
        var sum = arr[left] + arr[right];

        if( sum < K){
            left++;
        } else if( sum > K){
            right--;
        } else if( sum == K){
            right--;
            left++;
            count++
        }
    }

    if(count > 0){
        console.log("Yes");
    }else{
        console.log("No")
    }
}


function runProgram(input) {
   var input = input.trim().split("\n");

   var testCases = +input[0];

   var line = 1;
   for( var i = 0; i < testCases; i++){
       var arr1 = input[line].trim().split(" ").map(Number);
       line++;
       var arr = input[line].trim().split(" ").map(Number);
        line++;

        var N = +arr1[0];
        var K = +arr1[1];

        tOHeros(N, K, arr);
    }
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`2
5 31
10 11 13 17 21
5 44
10 11 13 17 21`);
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