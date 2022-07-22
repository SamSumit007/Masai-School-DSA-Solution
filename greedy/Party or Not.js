function  partyOrN(N, C, R, arr){

    // console.log(N, C, R, arr);

    arr.sort((a,b)=>{return a-b});
    // console.log(arr)

    let sum = 0;

    let count = 0;

    for(var i = 0; i < N; i++){
        sum += arr[i];
        if( sum <= R){
            
            count++;
        }
        

    }

    // console.log(count)

    if( count >= C){
        console.log("Party");
    }else{
        console.log("Sad");
    }


}




function runProgram(input) {
   var input = input.trim().split("\n");

   var [N, C, R] = input[0].trim().split(" ").map(Number);

   var arr = input[1].trim().split(" ").map(Number);

    partyOrN(N, C, R, arr);
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`5 3 24
6 4 21 20 13`);
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