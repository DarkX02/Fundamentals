function adAstra(input) {
    let pattern = /(?<sign>[#|])(?<product>[a-zA-z ]+)\k<sign>(?<expiration>\d{2}\/\d{2}\/\d{2})\k<sign>(?<calories>\d+)\k<sign>/g
    let matches = input[0].match(pattern)
    let totalCalories = 0
    if (matches) {
        for (let i = 0; i < matches.length; i++) {
            let pattern1 = /^(?<sign>[#|])(?<product>[a-zA-z ]+)\k<sign>(?<expiration>\d{2}\/\d{2}\/\d{2})\k<sign>(?<calories>\d+)\k<sign>$/gm
            let match = pattern1.exec(matches[i])
            totalCalories += Number(match.groups.calories)
        }
        let days = totalCalories / 2000
        console.log(`You have food to last you for: ${Math.floor(days)} days!`);
        for (match of matches) {
            let pattern1 = /^(?<sign>[#|])(?<product>[a-zA-z ]+)\k<sign>(?<expiration>\d{2}\/\d{2}\/\d{2})\k<sign>(?<calories>\d+)\k<sign>$/gm
            match = pattern1.exec(match)
            console.log(`Item: ${match.groups.product}, Best before: ${match.groups.expiration}, Nutrition: ${match.groups.calories}`);

        }
    }else{
        console.log('You have food to last you for: 0 days!');

    }
}
adAstra([
    'Hello|#Invalid food#19/03/20#450|$5*(@'
])