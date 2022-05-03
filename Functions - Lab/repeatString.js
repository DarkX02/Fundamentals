function repeatString(str,n){
    let text = ''
    for (let i = 1; i <= n; i++) {
        text+=str       
    }
    return text
}
console.log(repeatString('abc',3))