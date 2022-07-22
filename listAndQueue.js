function runProgram(input) {
    let newInput = input.trim().split('\n')
    let t = Number(newInput[0])

    let front = -1
    let rear = -1
    let queue = []

    for (let i = 1; i <= t; i++) {
        let option = newInput[i].trim().split(' ')

        if (option[0] == 'E') {
            queue.push(option[1])
            if (front == -1 && rear == -1) {
                front = 0
                rear = 0
            } else {
                rear += 1
            }
        } else if (option[0] == 'D') {
            if ((front == -1 && rear == -1) || front > rear) {
                console.log('Empty')
            } else {
                console.log(queue[front])
                front++
            }
        }
    }
}
if (process.env.USERNAME === 'getsu') {
    runProgram(`4
E 2
E 3
D
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
