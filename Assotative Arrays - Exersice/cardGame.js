function cardGame(arr) {
    let players = {}
    for (let line of arr) {
        let [name, cards] = line.split(': ')
        let cardsArr = cards.split(', ')
        if (players.hasOwnProperty(name)) {
            cardsArr.forEach(card => players[name].push(card))
        } else {
            players[name] = cardsArr
        }
    }
    for (let player in players) {
        let cards = Array.from(new Set(players[player]))
        let result = 0
        for (let card of cards) {
            let tokens = card.split('')
            let type = tokens.pop()
            let point = tokens.join('')
                if (point === 'J') {
                    point = 11
                } else if (point === 'Q') {
                    point = 12
                } else if (point === 'K') {
                    point = 13
                } else if (point === 'A') {
                    point = 14
                } else {
                    point = Number(point)
                }
                if (type === 'S') {
                    result += point * 4
                } else if (type === 'H') {
                    result += point * 3
                } else if (type === 'D') {
                    result += point * 2
                } else {
                    result += point
                }
        }
        console.log(`${player}: ${result}`);

    }
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ])