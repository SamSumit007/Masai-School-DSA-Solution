function     countP(arr){


    // console.log(arr);

    let obj = {};

    arr.sort();
    // console.log(arr);

    for(var i = 0; i < arr.length; i++){

        if( obj[arr[i]] === undefined){
            obj[arr[i]] = 1;
        }else{
            obj[arr[i]]++;
        }

    }

    // console.log(obj);

    for(key in obj){

        console.log( key + " "+ obj[key]);

    }


    

}




function runProgram(input) {
   var input = input.trim().split('\n');

   var arr = input[0].trim().split("");

    countP(arr)
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`masaischool`);
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