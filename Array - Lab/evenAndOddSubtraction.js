function evenAndOddSubtraction(array){
    let sumEven = 0
    let sumOdd = 0
    for (let i = 0; i < array.length; i++) {
        let num = Number(array[i]);
        if (num%2===0) {
            sumEven+=num
        }else{
            sumOdd+=num
        }
        
    }
    let diffrence = sumEven-sumOdd
    console.log(diffrence);
}
evenAndOddSubtraction([3,5,7,9])