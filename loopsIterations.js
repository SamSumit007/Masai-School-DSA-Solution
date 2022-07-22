// level 2
/* 
Write a function in Javascript to print the sum of the first n fibonacci numbers.

**Input:** 6

**Output:**

```
1 1 2 3 5 8
Sum: 20
``` */

function fibSum(n) {
    let fibArr = [1, 1];
    if (n < 2) {
      return n;
    }
    for (let i = 2; i < n; i++) {
      fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
    }
    let sum = 0;
    for (let i = 0; i < fibArr.length; i++) {
      sum += fibArr[i];
    }
    //   console.log("f", fibArr);
    return sum;
  }
  
  console.log("fibSum(1):", fibSum(6));