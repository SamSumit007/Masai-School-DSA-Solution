Description

Given a square matrix of odd length , print the matrix elements in the order shown in the figure :


Sample Input 1                                      Sample Output 1
                                                    
1
3
1 2 3                                                 6 2 4 8
4 5 6
7 8 9




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
if (process.env.USERNAME === "Sumit") {
    runProgram(`1
3
1 2 3
4 5 6
7 8 9`);
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
