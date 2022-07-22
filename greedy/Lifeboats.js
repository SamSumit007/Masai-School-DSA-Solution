function liftBt(N, K, arr){

    // console.log(N, K, arr);
    let count = N;
    let flag = true;
    let arr1 = []

    for(var i = 0; i < N; i++){

        if( arr[i] < K){
arr1.push(arr[i]);
        }
        

    }
    arr1.sort((a,b)=>{return a-b});

    // console.log(arr1);

    let left =  0;
    let right = N-1

    while(left < right){

        let m = arr1[left] + arr1[left];

        if( m < K ){

            left++;
            count--;
            
        }else if(m > K) {
            left--;
        }else{
            left++;
            right--;
            count--;
        }



    }
    console.log(count);
    


}


function runProgram(input) {
   var input = input.trim().split('\n');

   var testCases = +input[0]

   var line = 1;

   for(var i = 0; i < testCases; i++){

        let [N, K] = input[line].trim().split(" ").map(Number);
            line++;
        let arr = input[line].trim().split(" ").map(Number);
            line++;

        liftBt(N, K, arr);
   }    
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`2
4 5
3 5 3 4
4 3
1 2 2 3`);
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