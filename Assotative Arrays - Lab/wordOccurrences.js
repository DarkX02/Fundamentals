function wordOccurrences(arr) {
    let words = new Map()
    for (let word of arr) {
        if (words.has(word)) {
            words.set(word, words.get(word) + 1)
        } else {
            words.set(word, 1)
        }
    }
    let entries = Array.from(words.entries()).sort((a, b) => b[1] - a[1])
    for (let entry of entries) {
        console.log(`${entry[0]} -> ${entry[1]} times`);
    }
}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another",
    "sentence", "And", "finally", "the", "third", "sentence"])