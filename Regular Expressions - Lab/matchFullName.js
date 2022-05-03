function matchFullName(input){
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g

    let match = pattern.exec(input)

    let arr = []
    while(match !== null){
        arr.push((match[0].trim()))

        match = pattern.exec(input)
    }
    console.log(arr.join(' '))
}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")