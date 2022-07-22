function         flowerM(N, K, arr){

    // console.log(N, K, arr);

    let count = 0;

    for(let i = 0; i < N; i++){
        if( i == 0 && arr[0] == 0 && arr[1] == 0){
            arr[i] = 1
            count++;
            // i++;
        }else if( i == N-1 && arr[N-1] == 0 && arr[N-2] == 0){
            arr[i] = 1
            count++;
            // i++;
        }else if(arr[i] == 0 && arr[i+1] == 0 && arr[i-1] == 0){
            arr[i] = 1;
            count++;
            // i++;
        }
    }

    // console.log(count);
    // console.log(arr);

    if(count >= K){
        console.log("Yes")
    }else{
        console.log("No")
    }
}

function runProgram(input) {
   var input = input.trim().split("\n");

   let testCases = +input[0];
   

   let line = 1;

   for(let i = 0; i < testCases; i++){

        let [N, K] = input[line].trim().split(" ").map(Number);

        line++;

        let arr = input[line].trim().split(" ").map(Number);
        line++;

      flowerM(N, K, arr);
   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`3
5 1
1 0 0 0 1
8 1
1 0 1 0 0 1 0 1
5 1
0 0 0 0 0 
`);
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