function oddOccurrences(input) {
    let arr = input.split(' ')
    let result = {}
    for (let word of arr) {
        let curWord = word.toLocaleLowerCase()
        if (result.hasOwnProperty(curWord)) {
            result[curWord]++
        } else {
            result[curWord] = 1
        }
    }
    let oddArr = []
    for (let key in result) {
        if (result[key] % 2 !== 0) {
            oddArr.push(key)
        }
    }
    let sorted = oddArr.sort((a,b) => a-b)
    console.log(sorted.join(' '));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')