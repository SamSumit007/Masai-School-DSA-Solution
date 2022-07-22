function BTM(N, arr){

    // console.log(N, arr);

    let max = arr[0];
    let step = arr[0];
    let countJ = 1;

    if( N == 1){
      return 0;
    }else if( arr[0] == 0){
      return -1;
    }else{

      for(let i = 1; i < N; i++){

        if(i == N-1){

          return countJ;

        }
        max = Math.max(max, i+arr[i]);
        step--;
        if(step == 0){

          countJ++;
          if(i >= max){

            return -1;

          }
          step = max - i;

        }

      }
      

    }

}


function runProgram(input) {
   var input = input.trim().split('\n');

   var N = +input[0];
   var arr = input[1].trim().split(' ').map(Number)
   
  console.log(  BTM(N, arr));
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`11
1 3 5 8 9 2 6 7 6 8 9`);
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