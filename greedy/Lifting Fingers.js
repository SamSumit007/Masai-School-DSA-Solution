function  lifting(arr){

    // console.log(arr);
    let count = 0;

    for(var i = 0; i < arr.length; i++){

        if( arr[i] != arr[i+1]){
            count++;
        }

    }

    console.log(count);
}


function runProgram(input) {
   var input = input.trim().split("\n");

   var testCases = +input[0];

   for(var i = 1; i<= testCases; i++){
       
    var arr = input[i].trim().split("");

        lifting(arr);
   }

   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`2
aaaaa
abbbaaz`);
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