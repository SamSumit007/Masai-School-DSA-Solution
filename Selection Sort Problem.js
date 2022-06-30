

for (i = 0; i < N - 1; i++) {
    min = i
    for (j = i + 1; j < N; j++) {
        if (arr[min] > arr[j]) {
            min = j;
        }
    }
    swap(arr, min, i)
}
var bag = "";
for (var j = 0; j < N; j++) {
    bag += arr[j] + " ";
}
console.log(bag);

function swap(array, a, b) {
    var temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}