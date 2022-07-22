// 3 star questoin
function printPattern(N) {
    for (let i = 1; i <= N; i++) 
    {
        var temp = "";

        for (let j = 1; j <=  i; j++)
        {
            temp += " ";
        }

        temp += "\\";     // "\" is called an escape character . i.e compiler does not consider the immediate next character after this symbol. so to print this "\" use "\\"  or 

          for(let j=1;j<=N-i;j++)
          {
              temp += "  ";
        }
        
      temp+="/";
   
        console.log(temp);
    }
}

function runProgram(input) {
   var N = Number(input);
   printPattern(N);
    
 }
 if (process.env.USERNAME === "Ajit") {
   runProgram(`9`);
    
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
 