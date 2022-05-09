function computerStore(arr) {
    let command = arr.shift()
    let taxes = 0
    let price = 0
    while (command !== 'special' && command !== 'regular') {
        command = Number(command)
        if (command < 0) {
            console.log('Invalid price!');
            command = arr.shift()
            continue
        }
        price += command
        taxes += command * 0.20

        command = arr.shift()
    }

    let total = price + taxes
    if (total === 0) {
        console.log('Invalid order!');
    } else {
        if (command === 'special') {
            total = total * 0.90
        }
        console.log(`Congratulations you've just bought a new computer!\nPrice without taxes: ${price.toFixed(2)}$\nTaxes: ${taxes.toFixed(2)}$\n-----------\nTotal price: ${total.toFixed(2)}$`);
    }
}
computerStore([
    'regular'
    ])
    
