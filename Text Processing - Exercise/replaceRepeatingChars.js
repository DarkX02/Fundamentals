function replaceRepeatingChars(text) {
    let symbolsArr = []
    for (let i = 0; i < text.length; i++) {
        let letter = text[i];
        if (letter !== text[i + 1]) {
            symbolsArr.push(letter)
        }
    }
    console.log(symbolsArr.join(''));
}
replaceRepeatingChars('qqqwerqwecccwd')