function matchPhoneNumber(input){
    let pattern = /(?:^|\s)\+359(-| )2\1\d{3}\1\d{4}\b/g

    let match = pattern.exec(input)
    let arr = []
    while(match !== null){
        arr.push(match[0].trim())

        match = pattern.exec(input)
    }
    console.log(arr.join(', '));
}
matchPhoneNumber("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222")