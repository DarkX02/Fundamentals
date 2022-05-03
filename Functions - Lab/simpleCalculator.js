function simpleCalculator(num1, num2, op){
    switch (op) {
        case 'multiply':
            return num1 * num2
            break;
        case 'divide':
            return num1 / num2
            break;
        case 'add':
            return num1 + num2
            break;
        case 'subtract':
            return num1 - num2
            break;
    }
}
console.log(simpleCalculator(5, 5, 'multiply'))