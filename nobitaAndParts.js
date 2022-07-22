function revString(str, l, r) {
    while (l < r) {
        let temp = str[l];
        str[l] = str[r];
        str[r] = temp;
        l++;
        r--;
    }
    return str;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let str = newInput[1].trim().split("");
    let k = newInput.slice(2);
    for (let i = 0; i < k.length; i++) {
        let lr = k[i].trim().split(" ").map(Number);
        str = revString(str, lr[0], lr[1]);
    }
    console.log(str.join(""));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`6 2
    abcdfg
    0 3
    2 5`);
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
