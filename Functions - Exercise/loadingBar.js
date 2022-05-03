function loadingBar(percent) {
    let loading = []
    function percentAdd(n) {
        let num = percent / 10
        for (let i = 1; i <= num; i++) {
            loading.push('%')
        }
        return num
    }

    function dotsAdd(n) {
        let end = 10 - percentAdd(n)
        for (let i = 1; i <= end; i++) {
            loading.push('.')
        }
        return loading
    }
    if (percent === 100) {
        console.log('100% Complete!');
        console.log(dotsAdd(percent));
    } else {
        console.log(`${percent}% [${(dotsAdd(percent)).join('')}]`);
        console.log('Still loading...');
    }
}
loadingBar(100)