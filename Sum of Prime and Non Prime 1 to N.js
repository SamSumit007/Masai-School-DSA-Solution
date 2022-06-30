// Sum of Prime and Non Prime Between [1, num]

var num = 10;

var sum1=0;
var sum2=0;

for(var i =1; i<=num; i++)
{
  var count = 0;
  for(var j=1; j<=i; j++)
  {
    if(i%j==0)
    {
      count++;
    }
  }
  if(count==2)
  {
    console.log(i + " Prime");
    sum1= sum1+i;
  }
  else
  {
    console.log(i + " Not Prime")
    sum2= sum2+i;
  }
}
console.log("Sum of Prime Numbers " + sum1);
console.log("Sum of Non Prime Numbers " + sum2);