function rightPlace(word1, char, word2) {
    let word = ''
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] === '_') {
            word += char
        } else {
            word += word1[i]
        }
    }
    console.log(word === word2 ? 'Matched' : 'Not Matched');
}
rightPlace('Str_ng', 'o', 'Strong')