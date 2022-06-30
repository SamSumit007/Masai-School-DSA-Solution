// Factorial between [1, num]

var num =10;

for(var j=1; j<=num;j++)
{
  var fact = 1;
  for(var i = 1; i<=j; i++)
  {
    fact= fact*i;
  }
  console.log(fact);
}
