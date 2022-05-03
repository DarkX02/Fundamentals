function softUniBarIncome(arr) {
    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<qty>\d+)\|[^|$%.]*?(?<price>[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)\$/
    let line = arr.shift()
    let totalSum = 0
    while (line !== 'end of shift') {
        let isMatched = pattern.test(line)
        let match = pattern.exec(line)
        if (match) {
            let income = Number(match.groups.qty) * Number(match.groups.price)
            totalSum += income
            console.log(`${match.groups.name}: ${match.groups.product} - ${income.toFixed(2)}`);
        }

        line = arr.shift()
    }
    console.log(`Total income: ${totalSum.toFixed(2)}`);
}
softUniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'])
console.log('-----');
softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'])