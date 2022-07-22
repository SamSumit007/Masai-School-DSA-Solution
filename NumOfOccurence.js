//Enter code here
function runProgram(input) {
    input = input.trim().split('\n')
  
    for (let i = 0; i < input.length; i++) {
      input[i] = input[i].trim().split(' ').map(Number)
    }
   // console.log(input)
   let [el,target]=input[0]
   let arr=input[1]
   let low=0;
   let high=el-1;
   let ans=0
   while(low<=high)
   {
       let mid=Math.floor((high+low)/2)
       let mid_val=arr[mid]
       if(mid_val==target)
       {
           ans=mid;
           high=mid-1
       }
       else if(mid_val>target)
       {
        high=mid-1
       }
       else
       {
           low=mid+1
       }
   }
  // console.log(ans)
    low=0;
    high=el-1;
    ans2=0
   while(low<=high)
   {
       let mid=Math.floor((high+low)/2)
       let mid_val=arr[mid]
       if(mid_val==target)
       {
           ans2=mid;
           low=mid+1
       }
       else if(mid_val>target)
       {
        high=mid-1
       }
       else
       {
           low=mid+1
       }
   }
   console.log(ans2+1-ans)
  }

  if (process.env.USER === 'Ajit') {
    runProgram(`6 3
    2 3 3 3 6 9`)
  } else {
    process.stdin.resume()
    process.stdin.setEncoding('ascii')
    let read = ''
    process.stdin.on('data', function (input) {
      read += input
    })
    process.stdin.on('end', function () {
      read = read.replace(/\n$/, '')
      read = read.replace(/\n$/, '')
      runProgram(read)
    })
    process.on('SIGINT', function () {
      read = read.replace(/\n$/, '')
      runProgram(read)
      process.exit(0)
    })
  }
  