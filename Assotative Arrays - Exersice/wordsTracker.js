function wordsTracker(arr) {
    let searchedWords = arr.shift().split(' ')
    let wordsCount = {}
    for (let word of searchedWords) {
        wordsCount[word] = 0
    }

    let keys = Object.keys(wordsCount)
    for (let word of arr) {
        if (wordsCount.hasOwnProperty(word)) {
            wordsCount[word]++
        }
    }
    let entries = Object.entries(wordsCount).sort((a, b) => b[1] - a[1])
    for (let entry of entries) {
        console.log(`${entry[0]} - ${entry[1]}`);
    }
}
wordsTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])