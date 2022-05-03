function listOfProducts(arr){
    let sortedArr = arr.sort()
    for (let i = 0; i < sortedArr.length; i++) {
        let el = sortedArr[i];
        console.log(`${i+1}.${el}`);
    }
}
listOfProducts(['Watermelon', 'Banana', 'Apples'])