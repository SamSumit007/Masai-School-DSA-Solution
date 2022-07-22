let final = [];

function lazy(arr) {
    let ans;
    let min = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
        let temp = findNotes(arr[i]);
        if (temp < min) {
            min = temp;
            ans = arr[i];
        } else if (temp === min && ans > arr[i]) {
            ans = arr[i];
        }
    }
    return ans;
}

function findNotes(n) {
    let currency = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    let ans = 0;
    let notes;
    for (let i = 0; i < currency.length; i++) {
        notes = Math.floor(n / currency[i]);
        n = n % currency[i];
        ans += notes;
    }

    return ans;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i < t * 2; i += 2) {
        let arr = newInput[i + 1].trim().split(" ").map(Number);
        final.push(lazy(arr));
    }
    console.log(final.join("\n"));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
    5
    11 50 51 1000 2000
    3
    200 13 5000`);
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
