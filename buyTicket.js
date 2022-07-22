function runProgram(input) {
    let newInput = input.trim().split('\n')
    let t = Number(newInput[0])
    let queue = []
    for (let i = 1; i <= t; i++) {
        let num = newInput[i].trim().split(' ')

        if (num[0] == 'E') {
            queue.push(num[1])
            console.log(queue.length)
        } else if (num[0] == 'D') {
            if (queue.length == 0) console.log('-1 0')
            else console.log(queue.shift() + ' ' + queue.length)
        }
    }
}
if (process.env.USERNAME === 'getsu') {
    runProgram(`5
E 2
D
D
E 3
D`)
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
