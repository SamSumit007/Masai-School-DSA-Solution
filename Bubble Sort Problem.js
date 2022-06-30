for (i = 0; i < N - 1; i++) {
    for (j = 0; j < N - i - 1; j++) {
        if (array[j] > array[j + 1]) {
            swap(array, j, j + 1);
        }
    }
}
var bag = "";
for (var j = 0; j < N; j++) {
    bag += array[j] + " ";
}
console.log(bag);

function swap(array, a, b) {
    var temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}