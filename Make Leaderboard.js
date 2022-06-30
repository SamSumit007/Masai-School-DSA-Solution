//You are given name and marks of N different students in a hackerrank contest. 
//Your task is to write a program that makes leaderboard of the students under following conditions:
//- If two students get same marks they get same rank
//- The student placed next to the same marks students will get the rank skipping the intermediate ranks.


function runProgram(input) {
    var input = input.split("\n");
    var name = [];
    var marks = [];
    var N = input.length - 1
    for (i = 1; i < input.length; i++) {
        var line = input[i].split(" ");
        name.push(line[0]);
        marks.push(+(line[1]));

    }
    result(name, marks, N);
}

function swap(array, a, b) {
    var temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

function result(name, marks, N) {
    for (i = 0; i < N - 1; i++) {
        for (j = 0; j < N - i - 1; j++) {
            if (name[j] > name[j + 1]) {
                swap(name, j, j + 1);
                swap(marks, j, j + 1);
            }
        }
    }
    //console.log(name,marks)

    for (i = 0; i < N - 1; i++) {
        for (j = 0; j < N - i - 1; j++) {
            if (marks[j] < marks[j + 1]) {
                swap(marks, j, j + 1);
                swap(name, j, j + 1);
            }
        }
    }
    //console.log(name,marks)
    var rank = 1
    var count = 0;
    var previous = -1;
    for (var i = 0; i < N; i++) {
        if (marks[i] == previous) {
            console.log(rank, name[i]);
        }
        else {
            rank += count;
            console.log(rank, name[i]);
            count = 0;
        }
        count++;
        previous = marks[i];
    }
}

if (process.env.USER === "") {
    runProgram(``);
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