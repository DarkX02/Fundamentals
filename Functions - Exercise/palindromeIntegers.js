function palindromeIntegers(arr){
    let isPalindrome = (num) =>{
        let numToString = String(num)
        let reversedNum = Number(numToString.split('').reverse().join(''))
        if (reversedNum == num) {
            return true
        }else{
            return false
        }
    }
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        console.log(isPalindrome(el));
    }
}
palindromeIntegers([32,2,232,1010])