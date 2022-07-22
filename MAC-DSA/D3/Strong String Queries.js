//Enter code here

function isVowel(s) {
    if (s === "a" || s === "e" || s === "i" || s === "o" || s === "u")
        return true;
    return false;
}

function runProgram(input) {
    var newInput = input.split("\n");
    var arr = newInput[1].trim().split(" ");
    var ans = [0];
    //console.log(arr);
    var final = [];
    for (var i = 0; i < arr.length; i++) {
        var str = arr[i];
        if (isVowel(str[0]) && isVowel(str[str.length - 1])) ans.push(1);
        else ans.push(0);
    }

    for (var i = 1; i < ans.length; i++) {
        ans[i] += ans[i - 1];
    }

    var query = newInput.slice(3);
    for (var i = 0; i < query.length; i++) {
        var [n, m] = query[i].trim().split(" ").map(Number);
        final.push(ans[m] - ans[n - 1]);
    }
    console.log(final.join("\n"));
}
if (process.env.USERNAME === "Ajit") {
    runProgram(`5
    aba suna oua tes aba
    5
    1 5
    2 4
    1 3
    3 5
    5 5`);
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