function storeProvision(curStock, orderedStock) {
    let stocks = {}
    for (let i = 0; i < curStock.length; i += 2) {
        let product = curStock[i]
        let qty = curStock[i + 1]
        stocks[product] = Number(qty)
    }
    for (let i = 0; i < orderedStock.length; i+=2) {
        let product = orderedStock[i];
        let qty = Number(orderedStock[i + 1])
        if (stocks.hasOwnProperty(product)) {
            stocks[product] += qty
        }else{
            stocks[product] = qty
        }
    }
    for (let key of Object.keys(stocks)) {
        console.log(`${key} -> ${stocks[key]}`);
    }
}
storeProvision(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'])