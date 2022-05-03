function equalSums(arr) {
    let index = 0
    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0
        let rightSum = 0
        if (i === 0) {
            for (let rightSumI = i + 1; rightSumI < arr.length; rightSumI++) {
                rightSum += arr[rightSumI];
            }
        } else if (i === arr.length - 1) {
            for (let leftSumI = 0; leftSumI < i; leftSumI++) {
                leftSum += arr[leftSumI];
            }
        } else {
            for (let leftSumI = 0; leftSumI < i; leftSumI++) {
                leftSum += arr[leftSumI];
            }
            for (let rightSumI = i + 1; rightSumI < arr.length; rightSumI++) {
                rightSum += arr[rightSumI];
            }
        }
        if (leftSum === rightSum) {
            console.log(i);
            return
        }
    }

    console.log('no');

}
equalSums([1, 2])