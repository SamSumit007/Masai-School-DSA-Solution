function diffOfK(N, k, arr){
   
  var first = 0;
  var second = 0;
  var diff = 0;
  var count = 0;
  while(first < N && second < N){

    diff = arr[second] - arr[first]
    if (diff == k && first != second){
      count++;
      second++;
      first++;
    } else if (diff   < k){
      second++;
    } else {
      first++;
    }

  }

  if( count > 0){
    console.log("Yes");
  } else {
    console.log("No");
  }
   
}



function runProgram(input) {
    
    var input = input.split("\n");
    var testCases = +input[0];
    
    var line = 1;
    for( var i = 0; i < testCases; i++ ){
        var arr1 = input[line].split(" ").map(Number);
        line++;
        var arr = input[line].split(" ").map(Number);
        line++;
        
        var N = arr1[0];
        var k = arr1[1];

            diffOfK(N, k, arr);
    }
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`2
5 3
1 2 3 4 5
5 8
1 2 3 4 5 `);
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