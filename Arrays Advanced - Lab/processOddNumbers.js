function processOddNumbers(arr) {
    let nums = []
    for (let i = 0; i < arr.length ; i++) {
        if (i % 2 !== 0) {
            nums.push(arr[i])
        }
    }
    let result = nums.map(x => x*2).reverse().join(' ')
    console.log(result);
}
processOddNumbers([3, 0, 10, 4, 7, 3])