function inventory(arr) {
    let heroes = []
    for (let line of arr) {
        let tokens = line.split(' / ')
        let hero = {}
        let name = tokens.shift()
        let level = Number(tokens.shift())
        hero.name = name
        hero.level = level
        if (typeof (tokens[0]) !== undefined) {
            let items = tokens.shift()
            hero.items = items
        }
        heroes.push(hero)
    }
    heroes.sort((a, b) => a.level - b.level)
    for (let hero of heroes) {
        console.log(`Hero: ${hero.name}`)
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'])