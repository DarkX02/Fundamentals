function theImitationGame(arr) {
    let encrypted = arr.shift().split('')
    let line = arr.shift()
    while (line !== 'Decode') {
        let tokens = line.split('|')
        let command = tokens.shift()
        if (command === 'Move') {
            let num = Number(tokens.shift())
            for (let i = 0; i < num; i++) {
                encrypted.push(encrypted.shift())
            }
        } else if (command === 'Insert') {
            let index = Number(tokens.shift())
            let value = tokens.shift().split('')
            for (let char of value) {
                encrypted.splice(index, 0, char)
                index++
            }
        } else if (command === 'ChangeAll') {
            let substring = tokens.shift()
            let replacement = tokens.shift()
            encrypted = encrypted.join('')
            while (encrypted.includes(substring)) {
                encrypted = encrypted.replace(substring, replacement)
            }
            encrypted = encrypted.split('')
        }
        line = arr.shift()
    }
    console.log(`The decrypted message is: ${encrypted.join('')}`);

}
theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
]
)