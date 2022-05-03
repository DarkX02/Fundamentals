function makeDictionary(arr) {
    let terms = []
    for (let line of arr) {
        let obj = JSON.parse(line)
        let key = Object.keys(obj)[0]
        let isExsist = false
        for (let i = 0; i < terms.length; i++) {
            let term = terms[i]
            if (term.hasOwnProperty(key)) {
                terms.splice(i, 1, obj)
                isExsist = true
                break
            }
        }
        if (!isExsist) {
            terms.push(obj)
        }

    }
    terms.sort((a, b) => Object.keys(a)[0].localeCompare(Object.keys(b)[0]))
    for (let term of terms) {
        let key = Object.keys(term)[0]
        console.log(`Term: ${key} => Definition: ${term[key]}`);
    }
}
makeDictionary([
    '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
    '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."} ',
    '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
    '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
    '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} '
])    