//find valid parentheses

var isValid = function (s) {
    var stack = [];
    var i = 0;
    var flag = true;
    while (i < s.length) {
        if (s[i] == "(" || s[i] == "[" || s[i] == "{") {
            stack.push(s[i]);
        }
        else {
            if (stack.length == 0) {
                flag = false;
                break;
            }
            else {
                var x = stack[stack.length - 1];
                if (s[i] == ")" && x != "(" || s[i] == "}" && x != "{" || s[i] == "]" && x != "[") {
                    flag = false;
                    break;
                }
                else {
                    stack.pop();
                }
            }
        }
        i++;
    }
    if (!flag) {
        return false;
    }
    else {
        if (stack.length == 0) {
            return true;
        }
        else {
            return false;
        }
    }

};