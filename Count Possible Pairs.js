//You are given a system of equations:
//x^2 + y = n
//y^2 + x = m
//You have to count, how many there are pairs of integers (x, y) (0 ≤ x, y) which satisfy the system.


var count = 0;
for (i = 0; i <= n; i++) 
{
    for (j = 0; j <= m; j++) 
    {
        if (((i * i) + j == n) && ((j * j) + i == m)) 
        {
            count++;
        }
    }
}
console.log(count);