function reverseAnArrayOfNumbers(n, arr) {
    let slice = []
    for (let i = n - 1; i >= 0; i--) {
        slice.push(arr[i])
    }
    console.log(slice.join(' '))

}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])