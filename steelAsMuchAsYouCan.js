function findTotal(value, weight, total) {
    let list = [];
    let profit = 0;
    for (let i = 0; i < value.length; i++) {
        list.push({
            value: value[i],
            weight: weight[i],
            ratio: value[i] / weight[i],
        });
    }
    list.sort((a, b) => b.ratio - a.ratio);

    for (let i = 0; i < list.length; i++) {
        if (total > 0 && total > list[i].weight) {
            profit += list[i].value;
            total -= list[i].weight;
        } else {
            if (total > 0)
                profit += Math.round((total / list[i].weight) * list[i].value);
            break;
        }
    }

    return profit;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let total = Number(newInput[0]);
    let value = newInput[2].trim().split(" ").map(Number);
    let weight = newInput[3].trim().split(" ").map(Number);
    console.log(findTotal(value, weight, total));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`50 
    3
    60 100 120 
    10 20 30`);
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
