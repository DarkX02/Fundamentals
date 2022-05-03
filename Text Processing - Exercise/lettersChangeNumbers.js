function lettersChangeNumbers(input) {
    let numArr = input.split(' ').filter(el => el !== '')
    let alphabetPosition = (char) => char.charCodeAt(0) - 96
    let totalSum = 0
    for (let chars of numArr) {
        let sum = 0
        let num = Number(chars.substring(1, chars.length - 1))
        if (chars[0] === chars[0].toUpperCase()) {
            sum += num / alphabetPosition(chars[0].toLowerCase())
        } else {
            sum += num * alphabetPosition(chars[0].toLowerCase())
        }
        if (chars[chars.length - 1] === chars[chars.length - 1].toUpperCase()) {
            sum -= alphabetPosition(chars[chars.length - 1].toLowerCase())
        } else {
            sum += alphabetPosition(chars[chars.length - 1].toLowerCase())
        }
        totalSum += sum
    }
    console.log(totalSum.toFixed(2));
}
lettersChangeNumbers('a1A')