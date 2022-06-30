//method 1
var count = 0;
for (var i = 1; i <= num; i++) {
    if (num % i == 0) {
        count++;
    }
}
if (count == 2) {
    console.log("Yes");
}
else {
    console.log("No");
}

//method 2
var flag = true;
for (var i = 2; i < num; i++) {
    if (num % i == 0) {
        flag = false;
        break;
    }
}
if (flag) {
    console.log("Yes");
}
else {
    console.log("No");
}

//method 3
var flag = true;
for (var i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i == 0) {
        flag = false;
        break;
    }
}
if (flag) {
    console.log("Prime Number");
}
else {
    console.log("Not Prime Number");
}