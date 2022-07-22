function tom(N, k, arr){
        // console.log(N + " " + k + " " + arr),
        var max = 0;
        var sum = 0;
        for(var i = 0; i<=k-1; i++){
            sum = sum + arr[i];
        }
        if(max < sum){
            max = sum;
        }
        for( var i = k; i<N; i++){
            sum = sum + arr[i];
            sum = sum - arr[i-k];
            if(max < sum){
                max = sum;
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
    tom(N, k, arr);
}
if (process.env.USERNAME === "siddhesh") {
    runProgram(`10 3
-1 -1 -2 1 -2 4 1 9 3 9`);
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