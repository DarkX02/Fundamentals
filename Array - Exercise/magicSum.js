function magicSum(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            let el2 = arr[j];
            if (el + el2 === num) {
                console.log(`${el} ${el2}`);
            }
        }
    }
}
magicSum([1, 2, 3, 4, 5, 6], 6)