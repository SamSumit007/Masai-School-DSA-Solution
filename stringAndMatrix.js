function stringToArray(el) {
    return el.split("");
}

function canMakeString(arr, s) {

    for (var i = 0; i < s.length; i++) {

        var index = arr[i % arr.length].indexOf(s[i]);

        if (index == -1)
            return false;
        else {
            arr[i % arr.length].splice(index, 1);
        }

    }
    return true;
}



function runProgram(input) {
    var newInput = input.split("\n");
    var index = 1;
    var t = Number(newInput[0]);
    while (t-- > 0) {
        //input
        var rc = newInput[index].split(" ").map(Number);
        var r = rc[0];
        var arr_lines = newInput.slice(index + 1, index + 1 + r);
        var arr = arr_lines.map(stringToArray);
        var s = newInput[index + 1 + r];
        index = index + 2 + r;

        if (canMakeString(arr, s))
            console.log("Yes");
        else
            console.log("No");

    }

}
if (process.env.USERNAME === "getsu") {
    runProgram(`1
3 3
abz
xyz
bdr
axbaydb`);
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