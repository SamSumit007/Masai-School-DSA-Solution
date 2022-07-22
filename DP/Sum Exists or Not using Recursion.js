
// This is a correct way but, it will give TLE if testCases is big =>

let mySet = new Set();

function    gS(arr, N, S, curr, newArr){

    // console.log(arr, N, S, curr, newArr);

    if(newArr.length > 0){
        // console.log(newArr.map(Number));

        mySet.add(newArr.map(Number).reduce((a,b)=>{return a+b}))
        
    }

    if(curr == N){
        return ;
    }

    for(var i = curr; i < N; i++){
        newArr.push(arr[i]);
        gS(arr, N, S, i+1, newArr);
        newArr.pop();
    }

}


function runProgram(input) {
   var input = input.trim().split("\n");

   let N = +input[0];
   let arr = input[1].trim().split(" ").map(Number);
   let S = +input[2];

   let newArr = [];
   let curr = 0;

   gS(arr, N, S, curr, newArr);
  //  console.log(mySet);

  if(mySet.has(S)){
    console.log("yes");
  }else{
    console.log("no");
  }
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`9
1 2 3 4 5 6 7 8 9
5`)
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