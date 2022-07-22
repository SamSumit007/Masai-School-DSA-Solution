function subArrSum(N, k, arr){
    var max = 0;
    for( var i = 0; i< N; i++){
        var out = "";
        var sum = 0;
        for( var j = i; j < N; j++){
            out = out + arr[j] + " ";
            sum = sum + arr[j];
            // console.log(out);
            // console.log(sum)

            if( sum % k != 0){
                if(sum > max){
                    max = sum;
                }
            }
        }
    }
    console.log(max);
}





function runProgram(input) {
    var input = input.split("\n");
        // console.log(input);
    var arr1 = input[0].split(" ").map(Number);
    var arr = input[1].split(" ").map(Number);

    var N = +arr1[0];
    var k = +arr1[1];
        subArrSum(N, k, arr); 
}
if (process.env.USERNAME === "siddhesh") {
    runProgram(`4 3
2 3 4 6`);
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