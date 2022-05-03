function furniture(arr){
    let pattern = />>(?<furniture>[A-Za-z]+)<<(?<price>\d+(?:\.\d+)?)\!(?<qty>\d+)/
    let product = arr.shift()
    let products = []
    let totalPrice = 0
    while(product !== 'Purchase'){
        let isMatched = pattern.test(product)
        let furniture = pattern.exec(product)
        if(isMatched){
            products.push(furniture.groups.furniture)
            totalPrice += Number(furniture.groups.price) * Number(furniture.groups.qty)
        }
        product = arr.shift()
    }

    console.log('Bought furniture:');
    for (let el of products) {
        console.log(el);       
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}
furniture(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase'])