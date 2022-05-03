function stringSubstring(searchedWord, text) {
    text = text.split(' ')
    let isFound = false
    // let reformedWord = searchedWord.toLocaleLowerCase()
    for (let word of text) {
        word = word.toLocaleLowerCase()
        if (word === searchedWord) {
            console.log(searchedWord);
            isFound = true
            break
        }
    }
    if (isFound === false) {
        console.log(`${searchedWord} not found!`);
    }
}
stringSubstring('jAvAScript',
    'JavaScript is the best programming language')