function isDisjoint(k, s1, s2) {
    let obj = {};

    for (let i = 0; i < k.length; i++) {
        if (obj[k[i]] == undefined) obj[k[i]] = 1;
        else obj[k[i]]++;
    }

    let temp = s1.join("") + s2.join("");
    temp = temp.split("");

    for (let i = 0; i < temp.length; i++) {
        let ele = temp[i];
        if (obj[ele] == undefined || obj[ele] <= 0) return false;
        obj[ele]--;
    }
    return true;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i < t * 6; i += 6) {
        let k = newInput[i + 1].trim().split("");
        let s1 = newInput[i + 3].trim().split("");
        let s2 = newInput[i + 5].trim().split("");

        console.log(isDisjoint(k, s1, s2));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
    7 
    sunrise
    3 
    sun
    4
    sire
    7
    roseday
    3
    dat
    4
    sore`);
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
