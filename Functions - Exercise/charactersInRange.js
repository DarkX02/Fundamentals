function charactersInRange(char1, char2) {
    let char1String = String(char1)
    let char2String = String(char2)

    let start = Math.min(char1String.charCodeAt(0), char2String.charCodeAt(0))
    let end = Math.max(char1String.charCodeAt(0), char2String.charCodeAt(0))

    let result = ''
    for (let i = start + 1; i < end; i++) {
        let el = String.fromCharCode(i)
        result += el + ' '
    }
    return result
}
console.log(charactersInRange('C', '£'))