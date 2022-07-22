var numbers = [1, 2, 3, 4, 5, 6, 7];

numbers.forEach(function (el)){
    console.log(el * el);
});

function double(el) {
    return el * 2;
}

var doubleNumbers = numbers.map(double);
console.log(doubleNumbers);

var isEven = function (el) {
    return el % 2 == 0;

}
var evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);

var product = function (ac, el) {
    return ac * el;
}
var numProduct = numbers.reduce(product);
console.log(numProduct);

var sum = function (ac, el) {
    return ac + el;
}
var evenNumSum = numbers.filter(isEven).reduce(sum);
console.log(evenNumSum);

var multiple3 = function (el) {
    return el % 3 == 0;
}

var cube = function (el) {
    return el ** 3;
}
var m3CubeSum = numbers.filter(multiple3).map(cube).reduce(sum);
console.log(m3CubeSum);