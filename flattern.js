let arr=[1,[2,3],[4,5,6],[8,9],[[7]]];
//let arr = [[2,3,4],9,1,[6[4,[3,2]]]]
//utput = [1,2,3,4,5,6,8,9,7]

 const flatten=(arr)=>{
 newArray=arr.reduce((acc,elem)=>{
  if(Array.isArray(elem)){
     acc=acc.concat(flatten(elem));
  }
   else{
    acc=[...acc,elem];
 }
   return acc;
 },[])
  return newArray;
 }
console.log(flatten(arr));

 

 

