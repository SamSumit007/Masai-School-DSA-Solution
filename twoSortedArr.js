function tSortArr(N, arr1, arr2){

    var left = 0;
    var right = N-1;
    var count = 0;
    while(left < N && right >= 0 ){
        if(arr1[left] == arr2[right]){
            count++;
            left++;
            right--;
        } else if( arr1[left] > arr2[right]){
            right--;
        } else if( arr1[left] < arr2[right]){
            left++;
        }
    }
    console.log(count);
}


function runProgram(input) {
    
    var input = input.split("\n");
    var testCases = +input[0];

    var line = 1;
    for (var i = 0; i < testCases; i++) {
        var N = +input[line];
        line++;
        var arr1 = input[line].split(" ").map(Number);
        line++;
        var arr2 = input[line].split(" ").map(Number);
        line++;
        tSortArr( N, arr1, arr2);
    }
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`1
6
1 2 2 3 4 5
4 4 3 2 1 1`);
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