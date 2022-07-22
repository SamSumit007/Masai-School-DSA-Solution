function productofeven(N, arr){
    var prod = 1;
    for( var i = 0 ; i< N ; i++){
        if( i%2 == 0 ){
            prod = prod * arr[i];
        }
    }
    console.log(prod);
}

function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var N = +input[0];
    var arr = input[1].split(" ").map(Number);
        productofeven(N, arr);

}
if (process.env.USERNAME === "siddhesh") {
    runProgram(`4
1 2 3 4`);
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