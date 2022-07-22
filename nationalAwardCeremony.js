function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function findAns(arr) {
    let left = 0;
    let right = arr.length - 1;
    let i = 0;

    while (i <= right) {
        if (arr[i] == 0) {
            swap(arr, i, left);
            left++;
            i++;
        } else if (arr[i] == 2) {
            swap(arr, i, right);
            right--;
        } else i++;
    }

    return arr.join(" ");
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i < t * 2; i += 2) {
        let arr = newInput[i + 1].trim().split(" ").map(Number);
        console.log(findAns(arr));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`1
    4
    2 0 1 2 0 0`);
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
