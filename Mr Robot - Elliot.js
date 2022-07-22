function mrRobotE(N, str, newStr,I, J){
    // console.log(N,str);

    if( I > J){
      return newStr;
    }
    let mid = Math.floor((I+J) / 2);
    newStr = newStr + str[mid] + mrRobotE(N, str, newStr, I, mid - 1) + mrRobotE(N, str, newStr, mid+1, J)
    return newStr;
}


function runProgram(input) {
   var input = input.trim().split("\n");

   var testCases = +input[0];
   var line = 1;

   for(var i = 0; i < testCases; i++){
     
     
     var newStr = "";
       var N = +input[line];
       line++;
       var str = input[line].trim()
       line++;
     var I = 0;
     var J = str.length - 1;
     
      console.log( mrRobotE(N,str,newStr,I,J));
   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`3
3
abc
4
abcd
11
abcdefghijk`);
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