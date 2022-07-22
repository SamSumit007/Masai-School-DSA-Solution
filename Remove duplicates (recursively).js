function removeD(arr,curr,ans){
  // console.log(arr);

  

  if( curr == arr.length - 1){
    return ans;
  }

  

  return removeD(arr,curr+1,ans)
}



function runProgram(input) {
   var input = input.trim().split("\n");
   var testCase = +input[0];

   var line = 1;

   for(var i = 0; i < testCase; i++){
     var curr = 0;
     var ans = [];

    var arr = input[line].split("");

    line++;

   console.log( removeD(arr,curr,ans));



   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`4
azxxxzy
caaabbbaac
gghhg
aaaacddddcappp`);
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