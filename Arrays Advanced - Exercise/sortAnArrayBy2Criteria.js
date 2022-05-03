function sortAnArrayBy2Criteria(arr) {
    let sorted = arr.sort((a, b) => {
        aLen = a.length
        bLen = b.length
        if (aLen === bLen) {
            return a.localeCompare(b)
        } else {
            return aLen - bLen
        }
    })
    console.log(sorted.join('\n'));
}
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])