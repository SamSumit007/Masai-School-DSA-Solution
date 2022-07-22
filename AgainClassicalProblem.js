function isOpen(a){
  if( a == '(' || a == '{' || a == '['){
    return true;
  } else{
    return false;
  }
}


function classicPrb(arr){
  var stack = [];
  var top = stack.length-1;
   for( var i = 0; i < arr.length; i++){
     if( isOpen(arr[i])){
       stack.push(arr[i]);
       top++;
     }
      else{

        if( stack.length == 0){
          return false;
        }
       if (stack[top] == '(' && arr[i] == ')' || stack[top] == '[' && arr[i] == ']' || stack[top] == '{' && arr[i] == '}' ){
         stack.pop();
         top--;
       } else{
         return false;
       }
      }
   }

   if( stack.length == 0){
     return true;

   } else{
     return false;
   }
    
  
}



function runProgram(input) {
   var input = input.trim().split("\n");
   var testCases = +input[0];

   var line = 1;

   for( var i =0 ; i < testCases; i++){
       var arr = input[line].trim().split("");
       line++;

        if (classicPrb(arr)){
          console.log("balanced")
        } else {
          console.log("not balanced")
        }
   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`3
{([])}
()
([]
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