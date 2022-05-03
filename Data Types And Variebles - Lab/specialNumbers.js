function specialNumbers(n) {
    for (let i = 1; i <= n; i++) {
        let nString = String(i)
        let sum = 0
        for (let j = 0; j < nString.length; j++) {
            sum += Number(nString[j]);

        }
        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`);
        }else{
            console.log(`${i} -> False`);
        }

    }
}
specialNumbers(29)