function signCheck(num1, num2, num3) {
    if (num1 > 0 && num2 > 0 && num3 > 0){
        return 'Positive'
    }else if ((num1<0 &&num2<0&&num3<0)) {
        return 'Negative'
    }else if((num1<0 && num2<0) || (num2<0 &&num3<0)||(num1<0 && num3<0)){
        return 'Positive'
    }else{
        return 'Negative'
    }
}
console.log(signCheck(1,2,-3));