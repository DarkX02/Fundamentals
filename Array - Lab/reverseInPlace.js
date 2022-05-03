function reverseInPlace(arr){
    for (let i = 0; i < Math.floor(arr.length/2); i++) {
        let element = arr[i];
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = element
    }
    console.log(arr.join(' '));
}
reverseInPlace(['a', 'b', 'c', 'd', 'e','f','g','h'])