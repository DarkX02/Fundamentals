function storage(arr) {
    let storage = new Map()
    for (let line of arr) {
        let [product, price] = line.split(' ')
        price = Number(price)
        if (!storage.has(product)) {
            storage.set(product, price)
        } else {
            storage.set(product, storage.get(product) + price)
        }
    }
    for(let product of storage.entries()){
        console.log(`${product[0]} -> ${product[1]}`);
    }

}
storage(['apple 50',
'apple 61',
'coffee 115',
'coffee 40'])