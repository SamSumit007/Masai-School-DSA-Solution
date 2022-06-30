//count frequency of a strinf and print all charecters along with thier frequency

function alanFrequency(N, string) {
    var str = "abcdefghijklmnopqrstuvwxyz";
    var m = new Map();
    for (var i = 0; i < N; i++) {
        if (m.has(string[i])) {
            m.set(string[i], m.get(string[i]) + 1);
        }
        else {
            m.set(string[i], 1);
        }
    }
    for (var i = 0; i < str.length; i++) {
        if (m.has(str[i])) {
            console.log(str[i] + "-" + m.get(str[i]));
        }
    }
}
