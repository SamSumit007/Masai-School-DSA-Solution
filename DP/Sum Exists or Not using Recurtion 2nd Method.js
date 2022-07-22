
// This is a correct way but, it will give TLE if testCases is big =>

function    sumENot( arr, idx, S){

    if(S == 0){
        return true;
    }
    if( S < 0 || idx < 0){
        return false;
    }
    return (sumENot(arr, idx-1, S) || sumENot(arr, idx-1, S - arr[idx]))

}


function runProgram(input) {
   var input = input.trim().split("\n");

   let N = +input[0];
   let arr = input[1].trim().split(" ").map(Number);
   let S = +input[2];

   let idx = N-1;

 if(sumENot( arr, idx, S)){
     console.log("yes");
 }else{
     console.log("no");
 }

  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`9
1 2 3 4 5 6 7 8 9
5`)
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