//print all substrings that length is a prime number

var count = 0;
for (i = 0; i < N; i++) 
{
    for (j = i; j < N; j++) 
    {
        var substr = "";
        for (k = i; k <= j; k++) 
        {
            substr += str[k];
        }
        var sl = substr.length;
        var f = 0;
        for (m = 1; m <= sl; m++) 
        {
            if (sl % m == 0) {
                f++;
            }
        }
        if (f == 2) 
        {
            count++;
        }
    }
}
console.log(count);