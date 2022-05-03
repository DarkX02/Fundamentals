function oddAndEvenSum(num) {
    numToString = String(num)
    let oddSum = (num) => {
        let result = 0
        for (let i = 0; i < numToString.length; i++) {
            let element = Number(numToString[i]);
            if (element % 2 !== 0) {
                result += element
            }
        }
        return result
    }

    let evenSum = function even(num) {
        let result = 0
        for (let i = 0; i < numToString.length; i++) {
            let element = Number(numToString[i]);
            if (element % 2 === 0) {
                result += element
            }
        }
        return result
    }
    return `Odd sum = ${oddSum(num)}, Even sum = ${evenSum(num)}`
}
console.log(oddAndEvenSum( 3495892137259234));