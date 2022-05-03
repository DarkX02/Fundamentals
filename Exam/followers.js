function followersSolve(arr) {
    let followers = {}
    let line = arr.shift()
    let count = 0
    while (line !== 'Log out') {
        let tokens = line.split(': ')
        let command = tokens.shift()
        if (command === 'New follower') {
            if (!followers.hasOwnProperty(tokens[0])) {
                followers[tokens[0]] = 0
                count++
            }
        } else if (command === 'Like') {
            if (!followers.hasOwnProperty(tokens[0])) {
                followers[tokens[0]] = Number(tokens[1])
                count++
            } else {
                followers[tokens[0]] += Number(tokens[1])
            }
        } else if (command === 'Comment') {
            if (!followers.hasOwnProperty(tokens[0])) {
                followers[tokens[0]] = 1
                count++
            } else {
                followers[tokens[0]]++
            }
        } else if (command === 'Blocked') {
            if (followers.hasOwnProperty(tokens[0])) {
                delete followers[tokens[0]]
                count--
            } else {
                console.log(`${tokens[0]} doesn't exist.`);
            }
        }
        line = arr.shift()
    }

    console.log(`${count} followers`);
    for (let key in followers) {
        console.log(`${key}: ${followers[key]}`);
    }

}
followersSolve(["New follower: George",
    "Like: George: 5",
    "New follower: George",
    "Log out"])
console.log('----------');
followersSolve(["Like: Katy: 3",
    "Comment: Katy",
    "New follower: Bob",
    "Blocked: Bob",
    "New follower: Amy",
    "Like: Amy: 4",
    "Log out"])
console.log('----------');
followersSolve(["Blocked: Amy",
    "Comment: Amy",
    "New follower: Amy",
    "Like: Tom: 5",
    "Like: Ellie: 5",
    "Log out"])