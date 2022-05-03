function factorialDivision(n1,n2){
    function factorialCalculate(n){
        let sum = 1
        for (let i = n; i > 0; i--) {
            sum*=i
        }
        return sum
    }

    let divided = factorialCalculate(n1) / factorialCalculate(n2)
    return divided.toFixed(2);
}
console.log(factorialDivision(6,2));