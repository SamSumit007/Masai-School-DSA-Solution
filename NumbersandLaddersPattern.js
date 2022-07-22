// 4 star question

var N = 7;
for (let i = 1; i <= N+1; i++) {
    var temp = "";
    for (let j = 1; j <= N - i + 1; j++) {
        temp += j;

    }
    temp += "/";

    for (let j = 1; j <= 2*(i-1);j++)
    {
        temp += " ";
    }

    temp += "\\";

    for (let j = N+1-i; j>=1; j--) {
        temp += j;

    }
    console.log(temp);
}

 

for (let i = 1; i <= N+1; i++) {
    var temp = "";
    for (let j = 1; j <= i-1; j++) {
        temp += j;

    }
    temp += "\\";

    for (let j = 1; j <= (N-i+1)*2;j++)
    {
        temp += " ";
    }

    temp += "/";

    for (let j = i-1; j >=1; j--) {
        temp += j;

    }
    console.log(temp);
}