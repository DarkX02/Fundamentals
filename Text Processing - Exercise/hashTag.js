function hashTag(text) {
    text = text.split(' ')
    let specialWords = []
    for (let word of text) {
        let doesInclude = false
        for (let char of word) {
            if (!((char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) ||
                (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) || 
                char.charCodeAt(0) === 35)) {
                doesInclude = true
                break
            }
        }
        if (word.startsWith('#') && word.length > 1 && doesInclude === false) {
            let specialWord = word.slice(1, word.length)
            specialWords.push(specialWord)
        }
    }
    for (let word of specialWords) {
        console.log(word);
    }
}
hashTag('##The symbol #12 is known #variously in English-speaking #regions as the #number sign')