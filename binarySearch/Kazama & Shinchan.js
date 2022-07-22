function kSfind(N, arr, K){

    // console.log(N, arr, K);


    let low = 0;

    let high = N - 1;

    while (low <= high) {

        let mid = Math.floor((low + high) / 2);

        if (arr[mid] == K) {
            console.log(mid);
            return;
        }

        if (arr[mid] > K) {

            high = mid - 1;


        } else {
            low = mid + 1;
        }

    }

    var count = 0;
    for(var i = 0; i < N; i++){

        if( arr[i] < K){
            count++;
        }else{
            console.log(count);
            return;
        }

    }
    

}

function runProgram(input) {
   var input = input.trim().split("\n");

   var N = +input[0];
   var arr = input[1].trim().split(" ").map(Number);
   var K = +input[2];

  kSfind(N, arr, K);
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`4
1 3 5 6
2 `);
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