function maxNumber(arr) {
    let topIntegerArr = []
    for (let i = 0; i < arr.length; i++) {
        if (i !== arr.length - 1) {
            let isTopInteger = true
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j]>=arr[i]) {
                    isTopInteger = false
                }
            }
            if (isTopInteger===true) {
            topIntegerArr.push(arr[i])
            }
        } else {
            topIntegerArr.push(arr[i])
        }
    }
    console.log(topIntegerArr.join(' '));
}
maxNumber([27, 19, 42, 2, 13, 45, 48])