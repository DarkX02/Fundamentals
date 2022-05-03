function condenseArrayToNumber(array) {
    let sum = 0
    let newArr = []
    for (let i = 0; i < array.length - 1; i++) {
        let elm = array[i] + array[i + 1]
        newArr.push(elm)
        if (i === array.length - 2) {
            i = -1
            array = newArr
            newArr = []
        }
    }
    console.log(array.join(''));
}
condenseArrayToNumber([1])