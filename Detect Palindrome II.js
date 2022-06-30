//You are given a string S. Find if the string, can be converted into a palindrome.
//You are free to rearrange the string in any way you want. 
//Rearrangement refers to the fact that the characters can be arranged in any way in the string.
//Deletion or addition of characters is not allowed.

var m = new Map();
for (var i = 0; i < N; i++) {
    if (m.has(str[i])) {
        m.set(str[i], m.get(str[i]) + 1);
    }
    else {
        m.set(str[i], 1);
    }
}
var count = 0;
for (var [key, value] of m) {
    if (m.get(key) % 2 != 0) {
        count++;
    }
}
if (count == 1) {
    console.log("Possible!");
}
else {
    console.log("Not Possible!");
}