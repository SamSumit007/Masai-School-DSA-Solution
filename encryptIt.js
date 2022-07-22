function encrypt(s, n) {
    if (s >= "0" && s <= "9") {
        let temp = s.charCodeAt(0);
        temp = String.fromCharCode(((temp + n - 48) % 10) + 48);
        return temp;
    } else if (s >= "A" && s <= "Z") {
        let temp = s.charCodeAt(0);
        temp = String.fromCharCode(((temp + n - 65) % 26) + 65);
        return temp;
    } else if (s >= "a" && s <= "z") {
        let temp = s.charCodeAt(0);

        temp = String.fromCharCode(((temp + n - 97) % 26) + 97);
        return temp;
    } else return s;
}

function solve(str, n) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        let s = encrypt(str[i], n);
        result += s;
    }
    return result;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let str = newInput[0].trim();
    let n = Number(newInput[1]);

    console.log(solve(str, n));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`AaZz190./Usa
    26`);
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
