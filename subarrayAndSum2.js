function maxSubarray(arr, k) {
    var left = -1;
    var right = 0;
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % k != 0) {
            if (left == -1)
                left = i;
            right = i;
        }
        sum += arr[i];
    }
    if (sum % k != 0)
        return 1;
    if (left == -1)
        return 0;
    left = left + 1; //number of elements to remove from left
    right = arr.length - right; //number of elements to remove from right

    var maxWindowSize = arr.length - Math.min(left, right); //finding maximum subarray size possible
    return maxWindowSize;
}

function subarrays(arr, k, num) {
    var count = 0;
    var sum = 0;
    for (var i = 0; i < num; i++)
        sum += arr[i];

    if (sum % k != 0)
        count++;

    for (var i = num; i < arr.length; i++) {
        sum += arr[i] - arr[i - num];
        if (sum % k != 0)
            count++;
    }

    return count;

}

function runProgram(input) {
    var newInput = input.split("\n");
    var nk = newInput[0].split(" ").map(Number);
    var k = nk[1];
    var arr = newInput[1].split(" ").map(Number);
    var num = maxSubarray(arr, k);
    if (num == 0 || num == 1)
        console.log(num);
    else
        console.log(subarrays(arr, k, num));

}
if (process.env.USERNAME === "getsu") {
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