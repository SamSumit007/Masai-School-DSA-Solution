function revArray(size,arr){
    var out= "";
    for( var i = size-1 ; i>= 0 ; i--){
        out = out + arr[i]+ " ";
    }
    console.log(out);
}

function runProgram(input) {
    var input = input.split("\n");
    var size= +input[0]
    var arr = input[1].trim().split(" ").map(Number);
   
        revArray(size,arr);

}
if (process.env.USERNAME === "siddhesh") {
    runProgram(`5
1 3 2 4 5`);
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