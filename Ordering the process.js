function orderingTP(N, arr1, arr2){
    // console.log(arr1,arr2);


    var count = 0;

    for(var i = 0; i< Infinity; i++){
        if(arr1[0] != arr2[0]){
            arr1.push(arr1[0])
            arr1.shift();
            count++;
        } 
        if(arr1[0] == arr2[0]){
            arr1.shift()
            arr2.shift()
            count++;
        }
        if(arr1.length == 0){
            break;
        }

        

    }
    console.log(count);
}

function runProgram(input) {
   var input = input.trim().split("\n");

   var N = +input[0];
   var arr1 = input[1].trim().split(" ").map(Number);
    var arr2 = input[2].trim().split(" ").map(Number);
   
    orderingTP(N,arr1,arr2);
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`3
3 2 1
1 3 2`);
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