function pairLessK(N, K, arr) {

  var arr1 = [];
  arr.sort((a,b) => {
    return a-b;
  });

  var left = 0; 
  var right = N-1;
  var sum = 0;
  // console.log(arr);

  // for (var i = 0; i < N; i++) {
  //   for (var j = i + 1; j < N; j++) {
  //     if (arr[i] + arr[j] < K) {
  //       arr1.push(arr[i] + arr[j])
  //     }
  //   }
  // }
  // console.log(arr1);

  while(left < right){
    sum = arr[left] + arr[right];
    if( sum < K){
      left++;
      arr1.push(sum);
    }else if(sum > K){
      right--;
    }else{
      
      right--;
    }
  }
  




  if (arr1.length > 0) {
    var M = 0;
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] > M) {
        M = arr1[i];
      }
    }
    console.log(M);
  } else {
    console.log("-1");
  }


}



function runProgram(input) {
  var input = input.trim().split("\n");

  var testCases = +input[0];

  var line = 1;
  for (var i = 0; i < testCases; i++) {
    var N = +input[line];
    line++;
    var arr = input[line].trim().split(" ").map(Number);
    line++;
    var K = +input[line];
    line++;
    pairLessK(N, K, arr);
  }

}
if (process.env.USERNAME === "siddhesh") {
  runProgram(`3
6
1 7 6 4 8 4
7
1
2
3
6
5 3 8 2 1 9
5`);
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
    process.exit(0);
  });
}