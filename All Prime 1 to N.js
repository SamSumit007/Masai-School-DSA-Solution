// print prime numbers between [1, num]

var num = 15;


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
    console.log(i);
  }
}