function login(input) {
    let index = 0
    let username = input[index]
    index++
    let count = 1
    while (count <= input.length) {
        let word = input[index]
        let pass = ''
        for (let i = word.length - 1; i >= 0; i--) {
            pass += word[i]
        }
        if (pass === username) {
            console.log(`User ${username} logged in.`);
            break
        } else {
            if (count>3) {
                console.log(`User ${username} blocked!`);
                break
            }
            console.log('Incorrect password. Try again.');
            count++
        }
        index++
    }
}
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])