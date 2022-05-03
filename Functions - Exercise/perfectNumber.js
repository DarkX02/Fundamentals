function perfectNumber(num) {
    let divisorsArr = []
    let divisors = (n) => {
        let middle = n / 2
        for (let i = 1; i <= middle; i++) {
            if (n % i === 0) {
                divisorsArr.push(i)
            }
        }
    }

    let isPerfectNumber = (n,func) => {
        func
        let sum = 0
        for (let el of divisorsArr) {
            sum += el
        }
        if (sum===n) {
            return true
        }else{
            return false
        }
    }

    if (isPerfectNumber(num,divisors(num))) {
        console.log('We have a perfect number!');
    }else{
        console.log("It's not so perfect.");
    }
}
perfectNumber(46)