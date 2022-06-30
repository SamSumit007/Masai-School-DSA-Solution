//new arrray of odd position elements

var arr = [];
for (i = 0; i < N; i++) 
{
    if (i % 2 != 0) 
    {
        arr = arr + array[i] + " ";
    }
}
console.log(arr);