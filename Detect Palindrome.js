var mun = num.toString();
var flag = true;
var a = 0;
for (i = mun.length - 1; i >= 0; i--) {
    if (mun[i] != mun[a]) {
        flag = false;
        break;
    }
    a++;
}
if (flag) {
    console.log("Yes");
}
else {
    console.log("No")
}