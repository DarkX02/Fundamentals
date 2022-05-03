function sumOfOddNumbers(n) {
    n = Number(n)
    let sum = 0
    let number = 1

    for (let i = n; n > 0; n--) {
        console.log(number);
        sum += number
        number += 2
    }

    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(0)