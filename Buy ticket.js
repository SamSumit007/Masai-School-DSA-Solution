function buyTicket(arr1, arr2){
    // console.log(arr1,arr2);

    var queue = [];

    for(var i = 0; i < arr1.length; i++){

        if(arr1[i] == "E"){
            queue.push(arr2[i]);
            console.log(queue.length);
        }
        if(arr1[i] == "D"){
            if(queue.length == 0){
                console.log("-1" + " " + (queue.length))

            }else{

                console.log(queue[0] + " " + (queue.length-1) )
                queue.shift();
            }
        }
    }
}


function runProgram(input) {
   var input = input.trim().split("\n");
    var testCases = +input[0];
   var arr1 = [];
   var arr2 = [];
   var line = 1;
   
   for(var i = 0; i < testCases ; i++){
       var arr = input[line].trim().split(" ");

       arr1.push(arr[0]);
       arr2.push(arr[1]);

    line++;
   }
    buyTicket(arr1,arr2);
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`5
E 2
D
D
E 3
D`);
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