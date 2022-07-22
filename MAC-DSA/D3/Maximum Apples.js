

function runProgram(input) {

    var input = input.trim().split("\n")
    //var k = +input[0].trim()
    var [N, M] = input[0].trim().split(" ").map(Number);
    var arr =  input[1].split(" ").map(Number);
     maxApp(arr, M)
   
}
function maxApp(arr, M){
    arr.sort((a,b) =>a-b)
    var count = 0;
    for(var i= 0; i<arr.length; i++){
        if(arr[i] > M){
            break;
        }
        M -= arr[i];
        count++;
    }
    console.log(count);
}
if (process.env.USERNAME === "Ajit") {
    runProgram(`4 20
    3 10 4 4 `);
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