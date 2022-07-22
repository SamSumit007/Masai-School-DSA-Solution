function runProgram(input) {
    let newInput = input.trim().split('\n')
    let queue = newInput[1].split(' ').map(Number)
    let arr = newInput[2].split(' ').map(Number)
    let totalMoves = 0

    for (let i = 0; i < queue.length; i++) {
        let person = queue[i]
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] == person) {
                totalMoves++
                arr[j] = -1
                break
            } else if (arr[j] != -1) totalMoves++
        }
    }

    console.log(totalMoves - 1)
}
if (process.env.USERNAME === 'getsu') {
    runProgram(`4
1 2 3 4
4 2 3 1`)
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
