function checkVowels(temp) {
    let obj = {};

    for (let i = 0; i < temp.length; i++) {
        if (!obj[temp[i]]) obj[temp[i]] = true;
    }
    if (obj["a"] && obj["i"] && obj["o"] && obj["u"]) return true;

    return false;
}

function solve(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        let temp = "";
        for (let j = i; j < str.length; j++) {
            temp += str[j];
            if (checkVowels(temp)) count++;
        }
    }
    return count;
}

function runProgram(input) {
    let str = input.trim();
    console.log(solve(str));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`dangerouscovid`);
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
