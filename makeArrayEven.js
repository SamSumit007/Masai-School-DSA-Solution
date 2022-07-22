function isEvenNumberPresent(arr) {
    for (var i = 0; i < arr.length; i++)
        if (arr[i] % 2 == 0)
            return true;
    return false;

}

function numberOfOddElements(arr) {
    var oddNum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1)
            oddNum++;
    }
    return oddNum;
}

//to make array even, need at least one even element or even number of odd elements.
function canMakeArrayEven(arr) {
    if (isEvenNumberPresent(arr))
        return true;
    if (numberOfOddElements(arr) % 2 == 0)
        return true;
    return false;
}


function runProgram(input) {
    var newInput = input.split("\n");
    var t = Number(newInput[0]);
    for (var i = 1; i <= t * 2; i += 2) {
        var arr = newInput[i + 1].split(" ").map(Number);
        if (canMakeArrayEven(arr))
            console.log("YES");
        else
            console.log("NO");
    }

}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
1
2
3
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