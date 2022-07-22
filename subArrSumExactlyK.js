function subArrSumK(N, k, arr) {
    var curr_sum = arr[0]
    var start = 0;
    var count = 0;
    for (var i = 1; i <= N; i++) {

        while (curr_sum > k && start < i - 1) {
            curr_sum = curr_sum - arr[start];
            start++;
        }
        if (curr_sum == k) {
            count++;
        }

        if (i < N) {
            curr_sum += arr[i];
        }
    }

    if (count > 0) {
        console.log("Yes");
    } else {
        console.log("No");
    }



}


function runProgram(input) {
    var input = input.split("\n");
    var testCases = +input[0];
    // console.log(testCases)
    var line = 1;
    for (var i = 0; i < testCases; i++) {
        var arr1 = input[line].split(" ").map(Number);
        line++;
        var arr = input[line].split(" ").map(Number);
        line++;

        var N = +arr1[0];
        var k = +arr1[1];

        subArrSumK(N, k, arr);
    }

}
if (process.env.USERNAME === "siddhesh") {
    runProgram(`3
5 3
1 2 1 3 4
4 5
1 2 1 3
3 2
1 2 1`);
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