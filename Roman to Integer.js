//convert roman number's string into integer

var romanToInt = function (s) {
    var symbol = "IVXLCDM";
    var value = [1, 5, 10, 50, 100, 500, 1000];
    var sum = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] == "I" && s[i + 1] == "V") {
            sum += 4;
            i++;
        }
        else if (s[i] == "I" && s[i + 1] == "X") {
            sum += 9;
            i++;
        }
        else if (s[i] == "X" && s[i + 1] == "L") {
            sum += 40;
            i++;
        }
        else if (s[i] == "X" && s[i + 1] == "C") {
            sum += 90;
            i++;
        }
        else if (s[i] == "C" && s[i + 1] == "D") {
            sum += 400;
            i++;
        }
        else if (s[i] == "C" && s[i + 1] == "M") {
            sum += 900;
            i++;
        }
        else {
            for (var j = 0; j < symbol.length; j++) {
                if (s[i] == symbol[j]) {
                    sum += value[j];
                }
            }
        }
    }
    return sum;
};