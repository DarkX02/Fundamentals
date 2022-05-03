function burgerBus(arr) {
    let citiesCount = Number(arr.shift())
    let totalProfit = 0
    for (let i = 1; i <= citiesCount; i++) {
        let city = arr.shift()
        let cityProfit = Number(arr.shift())
        let cityExpenses = Number(arr.shift())
        if (i % 5 === 0) {
            cityProfit *= 0.90
        } else if (i % 3 === 0) {
            cityExpenses *= 1.50
        }
        cityProfit -= cityExpenses
        totalProfit += cityProfit
        console.log(`In ${city} Burger Bus earned ${cityProfit.toFixed(2)} leva.`);
    }
    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);
}
burgerBus(["5",
"Lille",
"2226.00",
"1200.60",
"Rennes",
"6320.60",
"5460.20",
"Reims",
"600.20",
"452.32",
"Bordeaux",
"6925.30",
"2650.40",
"Montpellier",
"680.50",
"290.20",
])