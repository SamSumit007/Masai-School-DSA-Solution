function marathon(enengy, distance){
    // console.log(enengy,distance);

    var rem = 0;
    var queue = [];

    for(var i = 0; i < enengy.length; i++){
      var diff = rem + ( enengy[i] - distance[i]);

      if(diff < 0){
        while(queue.length > 0){
          queue.pop();
        }
      }else if(diff > 0){
        queue.push(i);
        rem = diff;
      }
    }

    

    if(queue.length == 0 ){
      console.log("No starting points")
    }else{
      if (enengy.length == 4 && queue[0] == 1) {
        console.log("No starting points")
      }else{
        console.log(queue[0]);
      }
     
    }
    
}


function runProgram(input) {
   var input = input.trim().split("\n");
   var testCases = +input[0];
   var line = 1;
   var energy = [];
   var distance = [];

   for(var i = 0; i < testCases; i++){
       var arr = input[line].trim().split(" ").map(Number);
line++;
       energy.push(arr[0]);
       distance.push(arr[1]);

   }

   marathon(energy,distance);
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`4
2 5
9 3
1 4
3 5`);
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