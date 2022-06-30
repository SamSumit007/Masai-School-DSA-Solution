// 1 2 3
// 4 5 6
// 7 8 9
// pattern like this

var num = 5;

var count = 1;
for(var i =1; i<=num; i++)
{
  var bag = "";
  for(var j = 1; j<=num; j++)
  {
    bag = bag + count + " ";
    count++;
  }
  console.log(bag);
}