function cutAndReverse(text) {
    // let firstHalf = text.substring(0, text.length / 2)
    // let secondHalf = text.substring(text.length / 2, text.lenght)
    console.log(text.substring(0, text.length / 2).split('').reverse().join(''));
    console.log(text.substring(text.length / 2, text.lenght).split('').reverse().join(''));
}
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')