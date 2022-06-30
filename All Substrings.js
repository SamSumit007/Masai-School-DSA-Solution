//generate all sub sequences by recursion with first line blank sub set

var sub = [];
function ss(str, op) {

    // base case
    if (str.length == 0) {
        // printing op
        //console.log(op);
        sub.push(op);
        return;
    }
    else {
        // logic part
        // 2 fun calls
        let nstr = str.substring(1);
        // call-1 -> ss(newstr, op)
        ss(nstr, op);
        // call-2 -> ss(newstr, op + str[0])
        ss(nstr, op + str[0]);
    }

}

ss("abc", "");
sub.sort();
console.log(sub.length);
for (var i = 0; i < sub.length; i++) {
    console.log(sub[i]);
}

