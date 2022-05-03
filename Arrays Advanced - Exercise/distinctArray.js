function distinctArray(numArr) {
    for (let i = 0; i < numArr.length; i++) {
        let num = numArr[i];
        for (let j = i + 1; j < numArr.length; j++) {
            if (num === numArr[j]) {
                numArr.splice(j, 1)
                j--
            }
        }
    }
    console.log(numArr.join(' '));
}
distinctArray([20, 8, 12, 13, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 8, 5])