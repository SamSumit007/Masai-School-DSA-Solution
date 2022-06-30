//2D array N row and M column 
//sum of all elements and then check prime for sum

var sum = 0;
for (i = 0; i < N; i++) 
{
    for (j = 0; j < M; j++) 
    {
        sum += arr[i][j];
    }
}
var count = 0;
for (m = 1; m <= sum; m++) 
{
    if (sum % m == 0) 
    {
        count++;
    }
}
if (count == 2) 
{
    console.log("true");
}
else 
{
    console.log("false");
}