function sumDigits(num){
    let sum=0
    let numString = num.toString()
    for (let i = 0; i < numString.length; i++) {
        let char = Number(numString[i]);
        sum+=char
    }
    console.log(sum);
}
sumDigits(5432)