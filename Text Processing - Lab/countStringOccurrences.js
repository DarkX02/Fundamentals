function countStringOccurrences(text, word) {
    let wordsArr = text.split(' ')
    let count = 0
    for (let input of wordsArr) {
        if (input === word) {
            count++
        }
    }
    console.log(count);
}
countStringOccurrences('This is a word and it also is a sentence',
    'is')