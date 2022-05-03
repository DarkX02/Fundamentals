function mergeArrays(arr1, arr2) {
    let newArr = []
    for (let i = 0; i < arr1.length; i++) {
        let el1 = arr1[i];
        let el2 = arr2[i];
        let combined = null
        if (i % 2 === 0) {
            combined = Number(el1) + Number(el2)
        } else {
            combined = '' + el1 + el2
        }
        newArr.push(combined)
    }
    console.log(newArr.join(' - '));
}
mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11'])
