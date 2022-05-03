function passwordGenerator(arr) {
    let word = arr.pop().toLocaleUpperCase()
    let combined = (arr[0] + arr[1]).toLocaleLowerCase()
    let i = 0
    for (let char of combined) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            combined = combined.replace(char, word[i])
            i++
            if (i >= word.length) {
                i = 0
            }
        }
    }
    combined = combined.split('').reverse().join('')
    console.log(`Your generated password is ${combined}`);
}
passwordGenerator([
    'areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed'])