function negativeOrPositiveNumbers(arr){
    let nums = arr.map(Number)
    let newArr = []
    for (let num of nums) {
        if (num<0) {
            newArr.unshift(num)
        }else{
            newArr.push(num)
        }
    }
    console.log(newArr.join('\n'));
    // for (let i = 0; i < newArr.length; i++) {
    //     console.log(newArr[i]);
    // }
}
negativeOrPositiveNumbers(['7', '-2', '8', '9'])