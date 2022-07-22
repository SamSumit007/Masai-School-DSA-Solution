function par(out, v, w, lo, hi){
    i = lo,
    j = hi,
    piv = out[hi]
    while(i<j){
        while(out[j]<=piv && j>0){
            j--
        }
        while(out[i]>=piv && i<hi){
            i++
        }
        if(i<j){
            var temp = out[i]
            out[i] = out[j]
            out[j] = temp
            var temp = v[i]
            v[i] = v[j]
            v[j] = temp
            var temp = w[i]
            w[i] = w[j]
            w[j] = temp
        }
    }
    var temp = out[i]
            out[i] = out[hi]
            out[hi] = temp
            var temp = v[i]
            v[i] = v[hi]
            v[hi] = temp
            var temp = w[i]
            w[i] = w[hi]
            w[hi] = temp
    return i
}
function quick(out,v,w,lo,hi){
    if(lo<hi){
        i = par(out, v, w, lo, hi)
        quick(out, v, w, lo, i-1)
        quick(out, v, w, i+1, hi)
    }
}
function  steal(tw, n, v, w){
    var ans = 0
    var out = []
    for(var i = 0; i<n; i++){
        out.push(v[i]/w[i])
    }
    var lo = 0; 
    var hi = out.length-1
    quick(out, v, w, lo, hi)
    for(var i = 0; i<n; i++){
        if(w[i]<=tw){
            ans += v[i]
            tw = tw - w[i]
        } else {
            ans =(ans + v[i] * (tw/w[i]))
            ans = Math.round(ans)
            break;
        }
    }
    console.log(ans)
}
function runProgram(input){
    input = input.trim().split("\n")
    var tw = +input[0]
    var n = +input[1]
    var v = input[2].trim().split(" ").map(Number)
    var w = input[3].trim().split(" ").map(Number)
    steal(tw, n, v, w)
}

if (process.env.USERNAME === "siddhesh") {
runProgram(input);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
  read += input;
  });
  process.stdin.on("end", function () {
  read = read.replace(/\n$/, "");
  read = read.replace(/\n$/, "");
  runProgram(read);
  });
  process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0) ;
  });
}