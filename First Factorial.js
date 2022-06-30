//return factorial

function FirstFactorial(num) {

    // code goes here 
    for (let i = num - 1; i >= 2; i--) {
        num *= i;
    }
    return num;

}

// keep this function call here 
console.log(FirstFactorial(readline()));