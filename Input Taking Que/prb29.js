function triangle(N, arr){
    for( var i = 0; i < arr.length ; i++){
        var count= 0;
        for( var j = 0 ; j< arr[i].length; j++){
            if ((arr[i][j] >= (arr[i][j + 1] + arr[i][j + 2])) || (arr[i][j] >= (arr[i][j + 1] + arr[i][j - 1])) || (arr[i][j] >= (arr[i][j - 1] + arr[i][j - 2]))) {
                count++;
            }
        }
        if(count>0){
            console.log("No")
        } else {
            console.log("Yes")
        }
    }
}


function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var N = +input[0];
    var arr = [];
    for( var i = 1 ; i < input.length  ; i++){
        arr.push(input[i].trim().split(" ").map(Number))
    }
    triangle(N, arr)
}
if (process.env.USERNAME === "siddhesh") {
    runProgram(`4
4 5 13
7 1 8
2 5 4
2 2 2
`);
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