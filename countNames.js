function countNames(arr) {
    arr.sort();
    var obj = {};
    for (var i = 0; i < arr.length; i++)
        if (obj[arr[i]] == undefined)
            obj[arr[i]] = 1;
        else
            obj[arr[i]]++;

    for (var key in obj)
        console.log(key + " " + obj[key]);
}

function runProgram(input) {
    var newInput = input.split("\n");
    var arr = newInput.slice(1);
    countNames(arr);

}
if (process.env.USERNAME === "getsu") {
    runProgram(`3
masai
school
masai`);
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