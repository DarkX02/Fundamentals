function smallestOfThreeNumbers(n1, n2, n3) {
    let smallestNum = function (num1, num2, num3) {
        let smallestNumber = 0
        if (num1 <= num2 && num1 <= num3) {
            smallestNumber = num1
        } else if (num2 <= num1 && num2 <= num3) {
            smallestNumber = num2
        } else {
            smallestNumber = num3
        }
        return smallestNumber
    }
    return smallestNum(n1, n2, n3)
}
console.log(smallestOfThreeNumbers(123, 342, 123));