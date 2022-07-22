function evenarry(size, arr){
    for( var i = 0; i < size; i++){
        if(arr[i]%2 == 0){
            console.log(arr[i]);
        }
    }
}

function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var size = +input[0];
    var arr = input[1].split(" ").map(Number);
        evenarry(size,arr);

}
if (process.env.USERNAME === "siddhesh") {
    runProgram(`5
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