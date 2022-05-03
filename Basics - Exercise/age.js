function age(num) {
    if (num >= 66) {
        console.log('elder');
    } else if (num >= 20) {
        console.log('adult');
    } else if (num >= 14) {
        console.log('teenager');
    } else if (num >= 3) {
        console.log('child');
    } else if (num >= 0) {
        console.log('baby');
    } else {
        console.log('out of bounds');
    }
}
age(-1)