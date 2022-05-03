function orders(order, n) {
    let price = 0
    switch (order) {
        case 'coffee':
        price = 1.50
            break;
        case 'water':
        price = 1
            break;
        case 'coke':
        price = 1.40
            break;
        case 'snacks':
        price = 2
            break;
    }
    return (price*n).toFixed(2)
}
console.log(orders('water', 2))