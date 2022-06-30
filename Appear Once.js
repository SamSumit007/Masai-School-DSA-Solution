//sum of all elements that are unique

  var output={};
  for(i=0;i<N;i++)
  {
      if(output[arr[i]]==undefined)
      {
          output[arr[i]]=1;
      }
      else
      {
          temp=output[arr[i]];
          output[arr[i]]=temp+1;
      }
  }
  var sum=0;
  for(key in output)
  {
      if(output[key]==1)
      {
          a=Number(key);
          sum+=a;
          
      }
  }
  console.log(sum);