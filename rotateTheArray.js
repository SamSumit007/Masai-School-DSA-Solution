function rotateArr(arr, k) {
    k = k % arr.length;
    if (k == 0) {
        console.log(arr.join(" "));
        return;
    }

    let sep = arr.length - k;
    let arr1 = arr.slice(sep);
    let arr2 = arr.slice(0, sep);

    console.log(arr1.join(" ") + " " + arr2.join(" "));
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i < t * 2; i += 2) {
        let nk = newInput[i].trim().split(" ").map(Number);
        let arr = newInput[i + 1].trim().split(" ").map(Number);
        let k = nk[1];
        rotateArr(arr, k);
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`3
    3 1
    1 2 3
    2 2
    1 2
    2 3
    1 2`);
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
