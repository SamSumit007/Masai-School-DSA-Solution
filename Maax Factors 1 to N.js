// print Number which has max number of factors between [1, num]


var num =10;

var number = 0;
var big =0;

for(var j=1; j<=num;j++)
{
  var count = 0;
  for(var i = 1; i<=j; i++)
  {
    if(j%i==0)
    {
      count++;
    }
    if(count>big)
    {
      big= count;
      number = i;
    }
  }
}
console.log("Number of Factors = " + big);
console.log("The Number Which has most number of factors = "+number);
