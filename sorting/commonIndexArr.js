function commonIndArr(N1, arr1, N2, arr2){
    
  var first = 0;
  var second = 0;
var out = "";
var count = 0;
  while ( first < arr1.length && second < arr2.length){
      if( arr1[first] == arr2[second]){
          out = out + arr1[first] + " ";
          first++;
          second++;
          count = 1;
      } else if( arr1[first] < arr2[second]){
          first++;
          
      } else if( arr1[first] > arr2[second]){
          second++;
          
      } 
  }
  console.log(out)
  if(count == 0){
      console.log("-1");
  }
}


function runProgram(input) {
    
    var input = input.split("\n");
    var testCases = input[0];
    
    var line = 1;
    for( var i = 0; i < testCases; i++){
        var N1 = +input[line];
        line++;
        var arr1 = input[line].split(" ").map(Number);
        line++;
        var N2 = +input[line];
        line++;
        var arr2 = input[line].split(" ").map(Number);
        line++;
        commonIndArr(N1, arr1, N2, arr2);
    }
    
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`2
6
1 2 3 4 5 6
3
3 3 5
4
1 2 3 4
4
5 6 7 8`);
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