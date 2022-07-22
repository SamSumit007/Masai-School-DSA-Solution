

function allSub(str,newStr,curr){
    // return N
    
  if(newStr.length  > 0){
    // var ans = newStr.join()
    console.log(newStr.join(""));
 

    
  }
  if(curr == str.length){
    return;
  }

  for(var i = curr; i < str.length; i++){
    newStr.push(str[i]);
    allSub(str,newStr,i+1);
    newStr.pop();
  }
  
}


function runProgram(input) {
   var input = input.trim().split("\n");
   var N = +input[0];
   var str = input[1].trim()
   var curr = 0;
  var newStr = [];
   allSub(str,newStr,curr);
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`9
    123456789`);
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