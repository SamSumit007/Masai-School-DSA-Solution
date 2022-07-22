function recSum(N, arr){
    // console.log(N, arr);
    
    var sum = 0;
    
    
   function diffSum(x){
        var diff = 0;

        if( x == N-1){
            return sum;
        }
        diff = Math.abs(arr[x] - arr[x+1]);
     
        sum = sum + diff;
       
        return diffSum(x+1);
    }
   
    console.log(diffSum(0));
   
}


function runProgram(input) {
   var input = input.trim().split("\n");

   var testCases = +input[0];

   var line = 1;

   for( var i = 0; i < testCases; i++){
       var N = +input[line];
       line++;
       var arr = input[line].trim().split(" ");
       line++;

       recSum(N, arr);
   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`2
3
1 5 2
5
3 5 6 1 8`);
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