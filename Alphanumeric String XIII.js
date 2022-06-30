//You are given an alphanumeric stringA, of lengthN. print the string that contains all the numbers first, than all the alphabets of that stringA, in same order.
//For example:-A = r1h4landN = 5, numbers in it are1,4and alphabets arer,h,lso output will be:-14rhl
//Note: The alphanumeric string, contains numbers from [0,9] and small case characters.

var alpha = "abcdefghijklmnopqrstuvwxyz";
var num = "0123456789";
var str1 = "";
var str2 = "";
for (i = 0; i < N; i++) 
{
    for (j = 0; j < alpha.length; j++) 
    {
        if (A[i] == alpha[j]) 
        {
            str1 += A[i];
        }
    }
    for (k = 0; k < num.length; k++) 
    {
        if (A[i] == num[k]) 
        {
            str2 += A[i];
        }
    }
}
console.log(str2 + str1);