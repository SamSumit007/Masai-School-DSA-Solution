function exitGrid(N, arr){
  
  var count = 0;
  var i = 0;
  var j =0 ;

  while ( i >= 0 && j >= 0 && i < arr.length && j < arr.length ){
    if (arr[i][j] == "X") {
      return 0;
     }
    
    if( arr[i][j] == "L"){
      arr[i][j] = "X";
      j--;
      
    } else if (arr[i][j] == "R") {
      arr[i][j] ="X";
      j++;
      
    } else if (arr[i][j] == "U") {
      arr[i][j] = "X";
      i--;
      
    } else  {
      arr[i][j] = "X";
      i++;
      
    }
    count++;
  }
   return count;
}


function runProgram(input) {
    var input = input.split("\n");
    var testCases = +input[0];
    var line = 1;

    for( var i = 0; i < testCases; i++){
      var N = +input[line];
      line++;
      var arr = [];

      for( var j = 0; j < N; j++){
        arr.push(input[line++].split(""));
      }
      console.log(exitGrid(N, arr));
    }
  
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`3
4
RRRR
LLLL
UUUU
DDDD
3
LRL
UUU
DLR
2
RL
DD
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