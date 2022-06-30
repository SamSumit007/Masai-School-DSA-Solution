//print odd if sum of all numbers is greater then all even numbers sum else print even

var esum = 0;
var osum = 0;
for (i = 0; i < n; i++) {
    if (arr[i] % 2 == 0) {
        esum = esum + arr[i];
    }
    else {
        osum = osum + arr[i];
    }
}
if (osum > esum) {
    console.log("Odd");
}
else {
    console.log("Even");
}