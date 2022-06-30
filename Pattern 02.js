//   *
//   * *
//   * * *
//   * * * *
//   * * * * *
//  pattern like this

var num = 5;

for(var i =1; i<=num; i++)
{
  var bag = "";
  for(var j = 1; j<=i; j++)
  {
    bag = bag + "*" + " ";
  }
  console.log(bag);
}