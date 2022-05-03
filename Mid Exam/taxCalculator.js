function taxCalculator(input) {
    let arr = input.shift().split('>>')
    let taxSum = 0
    for (let car of arr) {
        let tokens = car.split(' ')
        let type = tokens.shift()
        let years = Number(tokens.shift())
        let kilometers = Number(tokens.shift())
        let tax = 0
        if (type === 'family') {
            tax = 50
            tax -= years * 5
            tax += 12 * Math.floor(kilometers / 3000)
        } else if (type === 'sports') {
            tax = 100
            tax -= years * 9
            tax += 18 * Math.floor(kilometers / 2000)
        } else if (type === 'heavyDuty') {
            tax = 80
            tax -= years * 8
            tax += 14 * Math.floor(kilometers / 9000)
        } else {
            console.log("Invalid car type.");
            continue
        }
        taxSum += tax
        console.log(`A ${type} car will pay ${tax.toFixed(2)} euros in taxes.`);
    }
    console.log(`The National Revenue Agency will collect ${taxSum.toFixed(2)} euros in taxes.`);
}
taxCalculator([ 'family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012'])