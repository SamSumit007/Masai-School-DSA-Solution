function timeToNum(s) {
    let temp = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] != ":") temp += s[i];
    }
    return temp;
}

function findCount(arrival, departure) {
    let maxCount = 0;
    for (let i = 0; i < arrival.length - 1; i++) {
        let count = 1;
        for (let j = i + 1; j < departure.length; j++) {
            if (
                (arrival[i] >= arrival[j] && arrival[i] <= departure[j]) ||
                (arrival[j] >= arrival[i] && arrival[j] <= departure[i])
            )
                count++;
        }
        maxCount = Math.max(count, maxCount);
    }
    return maxCount;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let arrival = timeToNum(newInput[1].trim()).split(" ").map(Number);
    let departure = timeToNum(newInput[2].trim()).split(" ").map(Number);
    console.log(findCount(arrival, departure));
}

if (process.env.USERNAME === "getsu") {
    runProgram(`6
    9:00 9:40 9:50 11:00 15:00 18:00
    9:10 12:00 11:20 11:30 19:00 20:00`);
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
