function travelTime(arr) {
    let countries = {}
    for (let line of arr) {
        let tokens = line.split(' > ')
        let country = tokens.shift()
        let town = tokens.shift()
        let price = Number(tokens.shift())
        if (!countries.hasOwnProperty(country)) {
            countries[country] = {}
        }
        if (!countries[country].hasOwnProperty(town)) {
            countries[country][town] = price
        } else {
            if (countries[country][town] > price) {
                countries[country][town] = price
            }
        }
    }
    let sorted = Object.keys(countries).sort((a, b) => a.localeCompare(b))
    for (let country of sorted) {
        let entries = Object.entries(countries[country]).sort((a, b) => a[1] - b[1])
        let towns = entries.map(town => `${town[0]} -> ${town[1]}`)
        console.log(`${country} -> ${towns.join(' ')}`)
    }
}

travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'])