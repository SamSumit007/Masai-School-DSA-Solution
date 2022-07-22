function bdayS(arr, K, curr1, newStr){
    // console.log(arr, K, curr1, newStr);

    if(newStr.length == K){
        
        console.log(newStr.join(" "));
    }

    if(curr1 == arr.length){
        return;
    }

    for(var i = curr1; i < arr.length; i++){
        newStr.push(arr[i]);
        bdayS(arr,K, i + 1, newStr);
        newStr.pop();
    }
}


function runProgram(input) {
   var input = input.trim().split(" ");
   var N = +input[0];
   var K = +input[1];

    // bdayS(N,K);
    var newStr = [];
    var curr1 = 0;
    var curr = 1;
    var arr = [];
    function split1(N, curr) {
        if (curr > N) {
            return arr;
        }

        arr.push(curr);

        return split1(N, curr + 1);
    }
    split1(N, curr)

    bdayS(arr,K,curr1,newStr);

    // console.log(arr);
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`4 2`);
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