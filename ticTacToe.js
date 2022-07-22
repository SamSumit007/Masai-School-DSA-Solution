function stringToArray(el) {
    return el.split(" ");
}

function findAllSolutions(arr) {
    //getting all possible solutions of given tic tac toe input and storing in sol array.
    var sol = [];

    //all row and column solutions
    for (var i = 0; i < arr.length; i++) {
        sol.push([arr[i][0], arr[i][1], arr[i][2]].join(""));
        sol.push([arr[0][i], arr[1][i], arr[2][i]].join(""));
    }

    //all diagonal solutions
    sol.push([arr[0][0], arr[1][1], arr[2][2]].join(""));
    sol.push([arr[0][2], arr[1][1], arr[2][0]].join(""));


    return sol;
}

function whoWon(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "ooo")
            return "o";
        else if (arr[i] == "xxx")
            return "x";
    }

    return "Tie";
}

function runProgram(input) {
    var newInput = input.split("\n");
    var arr = newInput.map(stringToArray);
    console.log(whoWon(findAllSolutions(arr)));

}
if (process.env.USERNAME === "getsu") {
    runProgram(`o x o
x x o
x o x`);
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