function race(arr) {
    let patternName = /(?<name>[A-Za-z]+)/g
    let patternDistance = /(?<distance>\d+)/g
    let contestants = arr.shift().split(', ')
    let currContestant = arr.shift()
    let racers = {}
    while (currContestant !== 'end of race') {
        let matchName = currContestant.match(patternName).join('')
        if (contestants.includes(matchName)) {
            let matchDistance = currContestant.match(patternDistance).join('')
            let distance = 0
            matchDistance.split('').forEach(element => {
                element = Number(element)
                distance += element
            });

            if (racers.hasOwnProperty(matchName)) {
                racers[matchName] += distance
            } else {
                racers[matchName] = distance
            }
        }
        currContestant = arr.shift()
    }
    let sorted = Object.entries(racers).sort((a, b) => b[1] - a[1])
    console.log(`1st place: ${sorted[0][0]}`);
    console.log(`2nd place: ${sorted[1][0]}`);
    console.log(`3rd place: ${sorted[2][0]}`);
}
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race'])