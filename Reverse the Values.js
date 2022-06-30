//num=971 then ans=179

//if num is in string
var bag="";
for(var i=num.length-1;i>=0;i--)
{
    bag+=num[i];
}
console.log(bag);

//if num is an integer
var rev=0;
while(num>0)
{
    var remainder=num%10;
    rev=rev*10+remainder;
    num=Math.floor(num/10);
}
console.log(rev);
