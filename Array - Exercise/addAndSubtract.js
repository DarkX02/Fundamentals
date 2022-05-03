function addAndSubtract(array){
    let sumOriginalArr = 0
    let sumChangedArr = 0
    for (let i = 0; i < array.length; i++) {
        sumOriginalArr+=array[i]
        let element = array[i];
        if (element%2===0) {
            array[i] += i
        }else{
            array[i] -= i
        }
        sumChangedArr+=array[i]
    }
    console.log(array);
    console.log(sumOriginalArr);
    console.log(sumChangedArr);
}
addAndSubtract([5, 15, 23, 56, 35])