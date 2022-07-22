function vowelSort(arr) {
    let ans = [];
    for (var i = 0; i < arr.length; i++) {
        let s = arr[i].trim();
        if (isVowel(s[0]))
            console.log(s);
    }
    for (var i = 0; i < arr.length; i++) {
        let s = arr[i].trim();
        if (!isVowel(s[0]))
            console.log(s);
    }

}

function isVowel(s) {
    if (s == 'a' || s == 'e' || s == 'i' || s == 'o' || s == 'u')
        return true;
    return false;
}

function runProgram(input) {

    let newInput = input.trim().split("\n");
    let t = Number(newInput[0]);
    let inp = 1;
    while (t-- > 0) {
        let lines = newInput[inp].trim().split(" ").map(Number);
        let arr = newInput.slice(inp + 1, inp + 1 + lines[0]);
        vowelSort(arr);
        inp = lines[0] + inp + 1;

    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
    3 4
    vmin
    piev
    shwa
    4 7
    ivjljtd
    osmpibw
    ixbtowe
    uaocpzo`);
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