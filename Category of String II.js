//if str = 1 2 3 26 then output abcz

var alpha = "abcdefghijklmnopqrstuvwxyz";
var str = "";
for (j = 0; j < size; j++) 
{
    for (i = 0; i < alpha.length; i++) 
    {
        if ((i + 1) == array[j]) 
        {
            str += alpha[i];
        }
    }
}
console.log(str);