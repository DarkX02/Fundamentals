function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let sum = 0
    let shieldCounter = 0
    for (let i = 1; i <= lostFights; i++) {
        let isHelmet = true
        let isSword = true
        if (i % 2 === 0) {
            sum += helmetPrice
            isHelmet = false
        }
        if (i % 3 === 0) {
            sum += swordPrice
            isSword = false
        }
        if (isHelmet === false && isSword === false) {
            sum += shieldPrice
            shieldCounter++
        }
        if (shieldCounter === 2) {
            sum += armorPrice
            shieldCounter = 0
        }
    }
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}
gladiatorExpenses(23, 12.50, 21.50, 40, 200)