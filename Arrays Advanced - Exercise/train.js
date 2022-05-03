function train(arr) {
    let wagons = arr.shift().split(' ').map(Number)
    let maxCapacity = Number(arr.shift())
    for (let command of arr) {
        let tokens = command.split(' ')
        if (tokens[0] === 'Add') {
            wagons.push(Number(tokens.pop()))
        } else {
            let passengers = Number(tokens.shift());
            for (let i = 0; i < wagons.length; i++) {
                if (wagons[i] + passengers <= maxCapacity){
                    wagons[i]+=passengers
                    break
                }
            }
        }
    }
    console.log(wagons.join(' '));
}
train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6'])