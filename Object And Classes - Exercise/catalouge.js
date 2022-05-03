function catalouge(arr) {
    let cataloge = []
    for (let line of arr) {
        let [product, price] = line.split(' : ')
        price = Number(price)
        let obj = {
            name: product,
            price: price
        }
        cataloge.push(obj)
    }

    let sorted = cataloge.sort((a, b) => (a.name).localeCompare(b.name))
    let firstLetter = null
    
    for (let i = 0; i < sorted.length; i++) {
        let product = sorted[i]
        let currFirstLetter = product.name[0]
        if (firstLetter !== currFirstLetter) {
            firstLetter = currFirstLetter
            console.log(firstLetter);
        }
        console.log(`  ${product.name}: ${product.price}`);
    }
}
catalouge([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'])