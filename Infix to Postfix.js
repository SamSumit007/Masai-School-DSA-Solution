// You are given an infix expression, you need to convert it to a postfix expression.

// Infix expression is an expression that is in the form of (a operator b). eg. a + b, a * b.

// Postfix expression is an expression that is in the form of (a b operator). eg. a b +, a b *.

// Sample Input 1 

// a+b-c+d*(e-f)/g+(h*(i/j))
// Sample Output 1

// ab+c-def-*g/+hij/*+

 function prec(c) {
        if(c == '^')
            return 3;
        else if(c == '/' || c=='*')
            return 2;
        else if(c == '+' || c == '-')
            return 1;
        else
            return -1;
    }
    function infixToPostfix(s) {
  
        let st = []; 
        let result = "";
  
        for(let i = 0; i < s.length; i++) {
            let c = s[i];
  

            if((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9'))
                result += c;
  
      
            else if(c == '(')
                st.push('(');
  
            else if(c == ')') {
                while(st[st.length - 1] != '(')
                {
                    result += st[st.length - 1];
                    st.pop();
                }
                st.pop();
            }
  
            else {
                while(st.length != 0 && prec(s[i]) <= prec(st[st.length - 1])) {
                    result += st[st.length - 1];
                    st.pop(); 
                }
                st.push(c);
            }
        }
         while(st.length != 0) {
            result += st[st.length - 1];
            st.pop();
        }
  
        console.log(result);
    }

function runProgram(input){		
input= input.trim().split("\n");
       var s = input[0];
          // console.log(s);
         infixToPostfix(s);
   
}

if (process.env.USER === "Sumit") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
