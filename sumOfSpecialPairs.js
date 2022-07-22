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
    var arr = newInput[1].split(" ").map(Number);
    var sum = 0;
    for (var i = 0; i < arr.length - 1; i++)
        for (var j = i + 1; j < arr.length; j++)
            if (isPrime(j - i))
                sum += Math.abs(arr[j] - arr[i]);

    console.log(sum);


}
if (process.env.USERNAME === "getsu") {
    runProgram(`8
5 12 32 11 4 56 5 0`);
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