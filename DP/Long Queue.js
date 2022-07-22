function     long(N, arr, dp){

    let count = 1;

    for(let i = 0; i < N; i++){
        if(arr[i] > arr[i+1]){
            count += 1;
        }
    }

    console.log(count);

    // let count = 0;
    // for(let i = 0; i < N; i++){
    //     if(i == 0){
    //         if( arr[i] > arr[i+1]){
    //             count++;
    //         }
    //     }
    //    else if(i == N-1){
    //         if(arr[i] > arr[i-1]){
    //             count++;
    //         }
    //     }
    //     else{
            
    //         if(arr[i] > arr[i-1] && arr[i] > arr[i+1]){
    //             count++;
    //         }
    //     }
    // }

    // console.log(count);

//     for(let i = 1; i < N; i++){
//         for(let j = 0; j < i; j++){
//             if(arr[i] > arr[j]){
//                 dp[i] = Math.max(dp[i], dp[j]+1)
//             }
//             if(arr[i]< arr[j]){
//                 dp[i] = 1;
//             }
//         }
//     }

//     let count = 0;
//     for(let i = 0; i < N; i++){
//         if(dp[i] < dp[i-1] && dp[i] < dp[i+1]){
//             count++;
//         }
//     }
// console.log(count + 1);


}


function runProgram(input) {
   var input = input.trim().split("\n");
   let N = +input[0];
   let arr = input[1].trim().split(" ").map(Number)
   let dp = [];
   
   for(let i = 0; i < N; i++){
       
       dp[i] = 1;
       
    }
    long(N, arr, dp)
    // console.log(dp);
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`6
1 2 4 3 5 8`);
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