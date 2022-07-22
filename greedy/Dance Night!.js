function danceNight(B, G, arrB, arrG){

    // console.log(B, G, arrB, arrG);

    arrB.sort((a,b)=> a -b )
    arrG.sort((a, b) => a- b)

    let count = 0;

    for(var i = 0; i< arrB.length; i++){

        if( arrB[i] > arrG[i]){
            count++;
        }

    }

    if( count == arrB.length){
        return "YES";
    }else{
        return "NO";
    }

}



function runProgram(input) {
   var input = input.trim().split("\n");

   var testCases = +input[0];

   var line = 1;

   for(var i = 0; i < testCases; i++){

        var [B, G] = input[line].trim().split(" ").map(Number);

        line++;

        var arrB = input[line].trim().split(" ").map(Number);

        line++;

        var arrG = input[line].trim().split(" ").map(Number);

        line++;


     console.log(   danceNight(B, G, arrB, arrG));

   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`1
4 5
2 5 6 8
3 8 5 1 7`);
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