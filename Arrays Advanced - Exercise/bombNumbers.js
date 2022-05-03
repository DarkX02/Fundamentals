function bombNumbers(numsArr, bombArr) {
    let bombNum = bombArr[0]
    let bombPower = bombArr[1]
    let indexOfBomb = numsArr.indexOf(bombNum)
    while (indexOfBomb !== -1) {
        let bombStart = Math.max(indexOfBomb - bombPower, 0)
        let bombLength = bombPower * 2 + 1
        numsArr.splice(bombStart, bombLength)
        indexOfBomb = numsArr.indexOf(bombNum)
    }
    let sum = 0
    numsArr.forEach(el => sum += el)
    console.log(sum)
}
bombNumbers([4, 2, 2, 4, 2, 2, 1, 4, 1, 1, 1, 1, 1],
    [4, 2])