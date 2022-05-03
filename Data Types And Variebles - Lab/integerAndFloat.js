function integerAndFloat(num1,num2,num3){
    let sum = num1+num2+num3
    let sumToString = String(sum)
    for (let i = 0; i < sumToString.length; i++) {
        let char = sumToString[i];
        if (char==='.') {
            console.log(`${sum} - Float`);
            return
        }
        
    }
    console.log(`${sum} - Integer`);
}
integerAndFloat(9, 100, 1)