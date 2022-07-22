function listQueue(arr1, arr2){
    // console.log(arr1,arr2);
    var queue = [];
    for(var i = 0; i < arr1.length; i++){
        if(arr1[i] == "Push"){
            queue.push(arr2[i]);
        }else if(arr1[i] == "Pop"){
            if(queue.length > 0){
                console.log(queue[queue.length - 1]);
                queue.pop();
            }
           
             else if (queue.length == 0) {
                console.log("Empty")
            }
        }
        
    }
    

    
}


function runProgram(input) {
   var input = input.trim().split("\n")

   var testCases = +input[0];
   var line = 1;
   var arr1 = [];
   var arr2 = [];

   for(var i = 0; i < testCases; i++){
        var arr = input[line].trim().split(" ");
        line++;
        arr1.push(arr[0]);
        arr2.push(arr[1]);


   }

   listQueue(arr1,arr2);
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`3
Push 4
Push 5
Pop`);
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