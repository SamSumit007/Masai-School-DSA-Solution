let arr = [2, 5, 8, 6, 10];
let k = 6;
k = k % arr.length;

let temp = [];
//left rotation
// 6,10 2 5 8

for (let i = 0; i < arr.length;i++)
{
    temp[i] = arr[(i + k) % arr.length];
}
console.log(temp);

//right rotation
//6 10 2 5 8 
for (let i = 0; i < arr.length;i++)
{
    temp[i] = arr[(i + arr.length-k) % arr.length];
}
console.log(temp);