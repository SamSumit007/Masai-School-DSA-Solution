//price and quantity is given in arrays

var sum=0;
for(var i=0;i<price.length;i++)
{
    sum+=price[i]*quantity[i];
}
console.log(sum);