var n = 5;
var count = 1;
for (let i = 1; i <= n;i++)
{
    var temp = "";
    for (let j = 1; j <= i; j++)
    {
        temp += count+" ";
        count++;
        }
console.log(temp);
}