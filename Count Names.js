//You are provided astring with N names, 
//your task is to write a code that prints the name along with the number of times it is presently separated by space

for (i = 0; i < N - 1; i++) {
    for (j = 0; j < N - i - 1; j++) {
        if (strings[j] > strings[j + 1]) {
            swap(strings, j, j + 1);
        }
    }
}
//console.log(strings)
var m = new Map();
for (var i = 0; i < N; i++) {
    if (m.has(strings[i])) {
        m.set(strings[i], m.get(strings[i]) + 1);
    }
    else {
        m.set(strings[i], 1);
    }
}
for (var [key, value] of m) {
    console.log(key, m.get(key));
}

function swap(array, a, b) {
    var temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

