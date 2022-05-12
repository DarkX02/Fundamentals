function memoryGame(arr) {
    let sequence = arr.shift().split(' ')
    let command = arr.shift()
    let moves = 0
    while (command !== 'end') {
        moves++
        let indexes = command.split(' ').map(Number)
        if ((indexes[0] < 0 || indexes[0 > sequence.length - 1]) ||
            (indexes[1] < 0 || indexes[1] > sequence.length - 1) ||
            indexes[0] === indexes[1]) {
            let middle = sequence.length / 2
            sequence.splice(middle, 0, `${moves}a`, `${moves}a`)
            console.log('Invalid input! Adding additional elements to the board');
        } else {
            if (sequence[indexes[0]] === sequence[indexes[1]]) {
                console.log(`Congrats! You have found matching elements - ${sequence[indexes[0]]}!`);
                let lastIndex = Math.max(indexes[0], indexes[1])
                let firstIndex = Math.min(indexes[0], indexes[1])
                sequence.splice(lastIndex, 1)
                sequence.splice(firstIndex, 1)
            } else {
                console.log('Try again!');
            }

        }
        if (sequence.length === 0) {
            console.log(`You have won in ${moves} turns!`);
            return
        }
        command = arr.shift()
    }
    console.log('Sorry you lose :(');
    console.log(sequence.join(' '));
}
memoryGame([
    "a 2 4 a 2 4",
    "4 0",
    "0 2",
    "0 1",
    "0 1",
    "end"
])