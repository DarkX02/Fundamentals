function sorting(arr) {
    let acending = arr.sort((a, b) => a - b)
    let newArr = []
    let cyclesCount = arr.length / 2
    for (let i = 1; i <= cyclesCount; i++) {
        let f = acending.shift()
        let l = acending.pop()
        newArr.push(l)
        newArr.push(f)
    }
    if (arr.length % 2 !== 0) {
        newArr.push(acending.pop())
    }
    console.log(newArr.join(' '));
}
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47, 56])