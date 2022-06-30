// Number of Factors between [1, num]

var num =10;

for(var j=1; j<=num;j++)
{
  var fact = 0;
  for(var i = 1; i<=j; i++)
  {
    if(j%i==0)
    {
      fact++;
    }
  }
  console.log(j +" has " +fact+" Factor");
}
