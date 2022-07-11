//Given an integer n, return true if it is a power of two. Otherwise, return false.
//An integer n is a power of two, if there exists an integer x such that n == 2x.

 function Square(n)  {
   if(n===1){
       return "True";
   } 
   else if (n%2!==0 || n===0){
       return "False";
   }
   return Square(n/2); 
 } 
    
function runProgram(input){
    input=input.trim().split("\n");
     var T=+input[0];
    var line = 1;
    
   for(var i=0; i<T; i++){
     
      var n=+input[line++];
      console.log(Square(n));
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
