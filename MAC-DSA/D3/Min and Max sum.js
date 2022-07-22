

function runProgram(input) {

    var input = input.trim().split("\n")
    //var k = +input[0].trim()
    var tc = +input[0];
    var line = 1;

    for(var i= 0; i<tc; i++){
        var [N, M] = input[line].split(" ").map(Number);
        line++;
        var arr = input[line].split(" ").map(Number);
        line++;
        minMax(N, M, arr);

    }
   
}
function minMax (N, M, arr){

for(var i= 0; i<arr.length; i++){
    var min = i;
    for(var j= i+1; j<arr.length; j++){
        if(arr[min] > arr[j]){
            min = j;
        }
    }
    var temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
}
var newArr = arr;
var minimum = 0;
var maxi =0;
for(var l = M; l<N; l++){
    minimum += newArr[l];
}
for(var b = 0; b<N-M; b++){
    maxi = maxi+newArr[b];
}
console.log(minimum-maxi);


}
if (process.env.USERNAME === "Ajit") {
    runProgram(`1
    5 1
    1 2 3 4 5`);
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