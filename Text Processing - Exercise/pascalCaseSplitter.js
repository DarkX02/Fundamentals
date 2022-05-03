function pascalCaseSplitter(text) {
    let words = []
    let startIndex = 0
    for (let i = 1; i < text.length; i++) {
        if (text[i] === text[i].toUpperCase()) {
            words.push(text.substring(startIndex, i))
            startIndex = i
        }
    }
    words.push(text.substring(startIndex))
    console.log(words.join(', '));
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')
// IfYouCanHaHaYouCantOrYouCan