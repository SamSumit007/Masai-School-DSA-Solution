function add(input) {
    var sum = 0;
    var arr = [];

    for (var i = 0; i < input.length; i++) {
        arr.push(input[i]);
    }

    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
}

add(15);