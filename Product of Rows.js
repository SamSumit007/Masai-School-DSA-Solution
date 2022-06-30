// product of every row in different lines //arr N*M

for (i = 0; i < N; i++) 
{
    var product = 1;
    for (j = 0; j < M; j++) 
    {
        product = product * arr[i][j];
    }
    console.log(product);
}

