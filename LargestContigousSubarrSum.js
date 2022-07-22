let arr = [-2, -3, 4, -1, -2, 1, 5, -3]

let maxSum = Math.max();
console.log('maxSum:', maxSum)
let sum = 0;

for (let i = 0; i < arr.length;i++)
{
    sum += arr[i];
    if (sum > maxSum)
        maxSum = sum;
    if (sum < 0)
        sum = 0;
}
console.log(maxSum);