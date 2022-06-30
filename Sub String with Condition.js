// count substrings that strat and end with same char

var count = 0;
for (vari = 0; i < str.length; i++) {
    for (var j = i; j < str.length; j++) {
        var bag = "";
        for (var k = i; k <= j; k++) {
            bag += str[k];
        }
        if (bag[0] == bag[bag.length - 1]) {
            count++;
        }
    }
}
console.log(count);

//another method 2 pointer

var count = 0;
var i = 0;
var j = 0;
while (i < s.length) {
    if (s[i] == s[j]) {
        count++;
        j++;
    }
    else {
        j++;
    }
    if (j == s.length) {
        i++;
        j = i;
    }
}
console.log(count);