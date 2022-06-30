// find the last digit of num and then check divisiblity by 3

var last = num%10;
if(last%3==0)
{
    console.log("Divisible");
}
else
{
    console.log("Not Divisible");
}