//first and last column sum in 2d array N*M

var sum = 0;
for (i = 0; i < N; i++) 
{
    for (j = 0; j < M; j++) 
    {
        if (j == 0 || j == M - 1) 
        {
            sum += arr[i][j];
        }
    }
}
console.log(sum);