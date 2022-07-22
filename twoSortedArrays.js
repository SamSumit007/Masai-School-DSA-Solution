function findCommon(arr1, arr2) {
    let left = 0;
    let right = arr2.length - 1;
    let count = 0;
    while (left < arr1.length && right >= 0) {
        if (arr1[left] == arr2[right]) {
            count++;
            left++;
            right--;
        } else if (arr1[left] > arr2[right]) {
            right--;
        } else left++;
    }
    return count;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i < t * 3; i += 3) {
        let arr1 = newInput[i + 1].trim().split(" ").map(Number);
        let arr2 = newInput[i + 2].trim().split(" ").map(Number);
        console.log(findCommon(arr1, arr2));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`1
    6
    1 2 2 3 4 5
    4 4 3 2 1 1`);
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
