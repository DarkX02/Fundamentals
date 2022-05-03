function NxNMatrix(num) {
    function makeRow(n) {
        let row = ''
        for (let i = 1; i <= n; i++) {
            row += n + ' '
        }
        return row
    }

    for (let i = 1; i <= num; i++) {
        console.log(makeRow(num));
    }
}
NxNMatrix(3)