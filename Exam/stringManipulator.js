function stringManipulator(arr) {
    let text = arr.shift()
    let command = arr.shift()
    while (command !== 'End') {
        let tokens = command.split(' ')
        let task = tokens.shift()
        if (task === 'Translate') {
            while (text.includes(tokens[0])) {
                text = text.replace(tokens[0], tokens[1])
            }
            console.log(text);
        } else if (task === 'Includes') {
            console.log(text.includes(tokens[0]) ? 'True' : 'False')
        } else if (task === 'Start') {
            console.log(text.startsWith(tokens[0]) ? 'True' : 'False');
        } else if (task === 'Lowercase') {
            text = text.toLocaleLowerCase()
            console.log(text);
        } else if (task === 'FindIndex') {
            let index = text.lastIndexOf(tokens[0])
            console.log(index);
        } else if (task === 'Remove') {
            let start = Number(tokens[1]) + Number(tokens[0])
            text = text.substring(0, tokens[0]) + text.substring(start,)
            console.log(text);
            break
        }
        command = arr.shift()
    }
}
stringManipulator(["*S0ftUni is the B3St Plac3**",
"Translate 2 o",
"Includes best",
"Start the",
"Lowercase",
"FindIndex p",
"Remove 2 7",
"End"])