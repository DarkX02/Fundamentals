function addAndSubtract(n1, n2, n3) {
    function add(num1, num2) {
        let addSum = num1 + num2
        return addSum
    }
    let substractSum = add(n1, n2) - n3
    return substractSum
}
console.log(addAndSubtract(1, 17, 30));