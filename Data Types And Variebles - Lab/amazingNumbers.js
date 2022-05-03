function amazingNumbers(num) {
    let sum = 0
    let numToString = String(num)
    for (let i = 0; i < numToString.length; i++) {
        sum += Number(numToString[i]);
    }
    let sumToString = String(sum)
    for (let i = 0; i < sumToString.length; i++) {
        if (sumToString[i] == 9) {
            console.log(`${num} Amazing? True`);
            return
        }
    }
    console.log(`${num} Amazing? False`);
}
amazingNumbers(999)