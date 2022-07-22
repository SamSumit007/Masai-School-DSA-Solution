function swap(str, i, j) {
    let temp = str.split("");
    let x = temp[i];
    temp[i] = temp[j];
    temp[j] = x;
    return temp.join("");
}

function permutations(str, l, r) {
    if (l == r) {
        let arr = str.split("");
        console.log(arr.join(" "));
    } else {
        for (let i = l; i <= r; i++) {
            str = swap(str, l, i);
            permutations(str, l + 1, r)
        }
    }
}

function runProgram(input) {
    let newInput = input.trim().split("\n");
    let arr = newInput[1].trim().split(" ");
    let str = arr.join("");
    permutations(str, 0, str.length - 1);
}
if (process.env.USERNAME === "") {
    runProgram(`3
    1 2 3`);
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