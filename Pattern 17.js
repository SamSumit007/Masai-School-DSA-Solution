//          *
//        * *
//      * * *
//    * * * *
//  * * * * *
// pattern like this

var num =10;

for(var i =num; i>=1; i--)
{
  var bag = " ";
  for(var j=1; j<=num; j++)
  {
    if(j>=i)
    {
      bag= bag +"*"+" ";
    }
    else
    {
      bag = bag + "  ";
    }
  }
  console.log(bag);
}