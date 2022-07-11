// ##1 to Num if i divisible by 3 & 5 then print Fizz Buzz
// ##i divisible by 3 print fizz / by 5 print buzz else i as it is



function FizzBuzz(n){
  for(var i=1; i<=n; i++) {
      if(i%3===0 && i%5===0){
          console.log("FizzBuzz");
      }
      else if(i%3===0){
          console.log("Fizz");
      }
      else if(i%5===0){
          console.log("Buzz");
      }
     else {
          console.log(i);
      }
      
  }
}

function runProgram(input){
    input=input.trim().split("\n");
    var T=+input[0];
    var line = 1;
    
   for(var i=0; i<T; i++){
     
      var n=+input[line++];
      //console.log(n);
      FizzBuzz(n);
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
