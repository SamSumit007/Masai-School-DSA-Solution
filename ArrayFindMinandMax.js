function runProgram(input) {
    var arr =input.trim().split(" ").map(Number)
   var n=arr.length
   var min,max
   //  console.log(newInput);     [2,5,1,7]
    if(n==1){
       max=arr[0]
       min=arr[0]
    }
    else{
        if(arr[0]>arr[1]){
            max=arr[0]
            min=arr[1]
        }
        else{
            max=arr[1]
            min=arr[0]
        }

        for(var i=2;i<n;i++){
            if(arr[i]>max){
                max=arr[i]
            }
            else if(arr[i]<min){
                min=arr[i]
            }
        }
    }
    console.log(max,min);
   
}
if (process.env.USERNAME === "Ajit") {
  runProgram(`2 6 3 4 7`);
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
      process.exit(0);
  });
}