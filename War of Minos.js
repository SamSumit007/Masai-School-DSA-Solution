// Minions are of 26 types, from 'a' to 'z'. If two Minions of same type finds themselves besides each other, they will kill each other.

// You are given a string of Minions. You need to find the final surviving string of Minions, after all the killings. 
// i.e Further No Minion will kill other Minion.

// If no Minion survived a after all the fighting, print "-1".

function runProgram(input){
    var input=input.split("\n");
    var N= +input[0];
    var str=input[1].trim();
    solve(N,str)
    
}
function solve(N,str){
 
  var stack=[];
  for(var i=0;i<str.length;i++){
      if(stack[stack.length-1]==str[i]){
          stack.pop();
      }
      else{
          stack.push(str[i]);
      }
  }
  if(stack.length==0){
      console.log(-1);
  }
  else{
      var strr="";
      for(var i=0;i<stack.length;i++){
          strr+=stack[i];
      }
      console.log(strr);
  }
  
  
  
    
}

 
if (process.env.USER === "") {
  runProgram(``);
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