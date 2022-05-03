function arrayManipulations(arr) {
    let numbers = arr.shift().split(' ').map(Number)
    for (let commands of arr) {
        let tokens = commands.split(' ')
        let command = tokens.shift()
        switch (command) {
            case 'Add':
                numbers.push(Number(tokens.shift()))
                break;
            case 'Remove':
                let removeNum = Number(tokens.shift())
                for (let i = 0; i < numbers.length; i++) {
                    let num = numbers[i];
                    if (num == removeNum) {
                        numbers.splice(i, 1)
                    }
                }
                break
            case 'RemoveAt':
                let removeAtIndex = Number(tokens.shift())
                numbers.splice(removeAtIndex, 1)
                break
            case 'Insert':
                let addNumber = Number(tokens.shift())
                let index = Number(tokens.shift())
                numbers.splice(index, 0, addNumber)
                break
        }
    }
    console.log(numbers.join(' '));
}
arrayManipulations(['6 12 2 65 6 42', 'Add 8', 'Remove 12', 'RemoveAt 3', 'Insert 6 2'])