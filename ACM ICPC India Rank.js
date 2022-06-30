//You are provided list of countries in correct ranking. Your task is to write a program that prints the rank of India in ICPC.

var m = new Map();
var rank = 1;
for (var i = 0; i < N; i++) {
    m.set(arr[i], rank);
    rank++;
}
console.log(m.get("India"));