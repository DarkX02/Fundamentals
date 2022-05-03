function lastKNumbersSequance(n, k) {
    let arr = [1]
    for (let i = 1; i < n; i++) {
        let sumArr = arr.slice(-k)
        let sum = 0
        for (let num of sumArr) {
            sum += num
        }
        arr.push(sum)
    }
    console.log(arr.join(' '));
}
lastKNumbersSequance(8, 1)