function swaps(s) {
    //aabcb
    //n = 5
    let n = s.length;
    let count = 0;

    for (let i = 0; i < Math.floor(n / 2); i++) {
        let left = i;
        let right = n - i - 1;
        while (left < right) {
            if (s[right] == s[left]) break;
            right--;
        }

        if (left == right) return -1;
        for (let j = right; j < n - left - 1; j++) {
            let temp = s[j];
            s[j] = s[j + 1];
            s[j + 1] = temp;
            count++;
        }
    }

    return count;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);

    for (let i = 1; i < t * 2; i += 2) {
        let str = newInput[i + 1].trim().split("");
        console.log(swaps(str));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
    5
    aabcb
    8
    adbcdbad `);
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
