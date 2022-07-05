//You are given a string S. Find if the string, can be converted into a palindrome.
//You are free to rearrange the string in any way you want. 
//Rearrangement refers to the fact that the characters can be arranged in any way in the string.
//Deletion or addition of characters is not allowed.
function detectPalII(N, string){
   var m = new Map();
for (var i = 0; i < N; i++) {
    if (m.has(string[i])) {
        m.set(string[i], m.get(string[i]) + 1);
    }
    else {
        m.set(string[i], 1);
    }
}
var count = 0;
for (var [key, value] of m) {
    if (m.get(key) % 2 !== 0) {
        count++;
    }
}
if (count > 1) {
    console.log("Not Possible!");
}
else {
    console.log("Possible!");
}
}
