function piccolo(arr) {
    let parkingLot = new Map()
    for (let line of arr) {
        let [direction, number] = line.split(', ')
        if (direction === 'IN') {
            parkingLot[number] = 1
        } else if (direction === 'OUT') {
            delete parkingLot[number]
        }
    }

    let sorted = Object.keys(parkingLot).sort((a, b) => a.localeCompare(b))
    if (sorted.length === 0) {
        console.log('Parking Lot is Empty');
    } else {
        console.log(sorted.join('\n'));
    }
}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])