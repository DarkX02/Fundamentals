function triplesOfLatinLetters(num) {
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            for (let k = 0; k < num; k++) {
                let result = ''
                let letter1 = String.fromCharCode(97 + i)
                let letter2 = String.fromCharCode(97 + j)
                let letter3 = String.fromCharCode(97 + k)
                result += letter1 + letter2 + letter3
                console.log(result);
            }
        }
    }
}
triplesOfLatinLetters(4)