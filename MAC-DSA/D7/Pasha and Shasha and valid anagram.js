function pashaSha(arr1, arr2){
    // console.log(arr1, arr2);

    if(arr1.length != arr2.length){
        return console.log("False");
    }
    let count = 0;
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr1.length; j++){
            if(arr1[i] == arr2[j]){
                count++;
            }
        }

    }
    if(count == arr1.length){
        console.log("True");
    }else{
        console.log("False");
    }
}

function runProgram(input) {
   var input = input.trim().split("\n");

   let testCases = +input[0];

   let line = 1;

   for(let i = 0; i < testCases; i++){
        let arr1 = input[line].trim().split("")
        line++;
        let arr2 = input[line].trim().split("")
        line++;

        pashaSha(arr1, arr2)
   }
   
  }
    if (process.env.USERNAME === "Ajit") {
        runProgram(`2
        abcd
        dcab
        aa
        aaa`);
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