function maxSequenceOfEqualElements(arr) {
    let sequenceArr = []
    let highestSequence = 0
    let currentSequence = 1
    let highestSequenceChar = 0
    let char = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (char === arr[i]) {
            currentSequence++
        } else {
            char = arr[i]
            currentSequence = 1
        }
        if (currentSequence > highestSequence) {
            highestSequence = currentSequence
            highestSequenceChar = char
        }

    }
    for (let i = 0; i < highestSequence; i++) {
        sequenceArr.push(highestSequenceChar)
    }
    console.log(sequenceArr.join(' '));
}
maxSequenceOfEqualElements([1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 4])