function    angryPeople(N, arr){
    // console.log(N, arr);
    arr.sort((a,b)=>{return a-b});

    for(var i = 1; i < N; i+=2){

      arr.unshift( +arr.splice(i, 1).join(""))

    }

    let ans = 0;
    for(var i = 0; i < N; i++){

      let value = Math.abs(arr[i]-arr[i+1%N]);

      if( ans < value){
        ans = value;
      }

    }
    console.log(ans);
    
}



function runProgram(input) {
   var input = input.trim().split("\n");

   var N = +input[0];

   var arr = input[1].trim().split(' ').map(Number);



   angryPeople(N, arr);
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`4
5 10 6 8`);
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