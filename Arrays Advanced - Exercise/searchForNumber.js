function searchForNumber(numsArr, taskArr) {
    let cutArr = numsArr.slice(0, taskArr[0])
    cutArr.splice(0, taskArr[1])
    let count = 0
    while (cutArr.includes(taskArr[2])) {
        count++
        cutArr.splice(cutArr.indexOf(taskArr[2]), 1)
    }
    console.log(`Number ${taskArr[2]} occurs ${count} times.`);
}
searchForNumber([1, 2, 3, 3, 1, 6],
    [5, 2, 3])