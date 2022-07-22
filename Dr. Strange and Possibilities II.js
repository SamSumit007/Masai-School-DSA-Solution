var obj = {}

function drSP(arr, newArr, curr){
    // console.log(arr, newArr, curr)

    if(newArr.length >= 0){
        if(obj[newArr.join(" ")] == undefined){
            obj[newArr.join(" ")] = 1
            console.log(newArr.join(" "));
        }
        
    }

    if(curr > arr.length){
        return;
    }

    for(var i = curr; i < arr.length; i++){
        newArr.push(arr[i]);

        drSP(arr,newArr,i+1);

        newArr.pop();
    }
}


function runProgram(input) {
   var input = input.trim().split("\n");

   var testCases = +input[0];
   
    var arr = input[1].trim().split(' ').map(Number).sort((a, b) => { return a - b });
    
   var newArr = [];
    var curr = 0;
   drSP(arr,newArr,curr);
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`3
1 2 2`);
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