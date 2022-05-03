function arrayRotation(arr, rotations) {
    for (let j = 1; j <= rotations; j++) {
        let firstElement = arr[0]
        for (let i = 0; i < arr.length; i++) {
            if (i === arr.length - 1) {
                arr[i] = firstElement
            } else {
                arr[i] = arr[i + 1]
            }
        }
    }
    console.log(arr.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2)