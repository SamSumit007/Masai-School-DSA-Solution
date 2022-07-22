function stringToArray(el) {
    return el.split(" ").map(Number);
}

function diamondTraversal(arr) {
    var result = "";
    var j = arr.length - 1;
    var i = j / 2;

    while (i >= 0) {
        result += arr[i][j] + " ";
        i--;
        j--;
    }
    i++;
    j++;

    while (j > 0) {
        i++;
        j--;
        result += arr[i][j] + " ";
    }

    while (i < arr.length - 1) {
        i++;
        j++;
        result += arr[i][j] + " ";
    }

    while (j < arr.length - 2) {
        i--;
        j++;
        result += arr[i][j] + " ";
    }

    return result;



}
//5 7 3 5 7 6 7 4

function runProgram(input) {
    var newInput = input.trim().split("\n");
    var t = Number(newInput[0]);
    var index = 1;
    while (t-- > 0) {
        var rows = Number(newInput[index]);
        var arr_lines = newInput.slice(index + 1, index + 1 + rows);
        var arr = arr_lines.map(stringToArray);
        index += 1 + rows;
        console.log(diamondTraversal(arr));
    }

}
if (process.env.USERNAME === "getsu") {
    runProgram(`1
5
1 2 3 5 6
4 5 6 7 8
7 8 9 4 5
3 6 7 4 2
5 6 7 8 1`);
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