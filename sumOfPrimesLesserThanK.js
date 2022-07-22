function isPrime(n) {
    if (n == 1)
        return false;
    if (n % 2 == 0 && n != 2)
        return false;

    for (var i = 3; i * i <= n; i += 2)
        if (n % i == 0)
            return false;

    return true;
}


function runProgram(input) {
    var newInput = input.split("\n");
    var test = Number(newInput[0]);
    for (var i = 1; i <= test * 3; i += 3) {
        var arr = newInput[i + 1].split(" ").map(Number);
        var K = Number(newInput[i + 2]);
        var sum = 0;
        for (var j = 0; j < arr.length; j++)
            if (arr[j] < K && isPrime(arr[j]))
                sum += arr[j];

        console.log(sum);


    }





}
if (process.env.USERNAME === "getsu") {
    runProgram(`1
5
1 2 3 4 5
10`);
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