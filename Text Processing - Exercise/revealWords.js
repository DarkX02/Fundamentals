function revealWords(replacement, text) {
    let wordsArr = null
    if (replacement.includes(', ')) {
        wordsArr = replacement.split(', ')
    }
    if (wordsArr) {
        for (let word of wordsArr) {
            text = text.replace('*'.repeat(word.length), word)
        }
    }else{
        text = text.replace('*'.repeat(replacement.length), replacement)
    }
    console.log(text);
}
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages')