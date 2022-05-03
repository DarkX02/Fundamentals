function sumFirstAndLast(arr) {
    let nums = arr.map(Number)
    let firstNum = nums.shift()
    let lastNum = nums.pop()
    let sum = firstNum + lastNum
    return sum
}
console.log(sumFirstAndLast(['20', '30', '40']));