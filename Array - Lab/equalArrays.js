function equalArrays(arr1, arr2) {
    let isIdentical = true
    let sum = 0
    for (let i = 0; i < arr1.length; i++) {
        let num1 = Number(arr1[i]);
        let num2 = Number(arr2[i])
        if (num1 !== num2) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            isIdentical = false
            break
        } else {
            sum += num1
        }
    }
    if (isIdentical === true) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
equalArrays(['10','20','30'], ['10','20','30'])