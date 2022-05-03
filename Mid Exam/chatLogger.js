function chatLogger(commandsArr) {
    let task = commandsArr.shift()
    let chat = []
    while (task !== "end") {
        let tokens = task.split(' ')
        let command = tokens.shift()
        if (command === 'Chat') {
            let message = tokens.shift()
            chat.push(message)
        } else if (command === 'Delete') {
            let message = tokens.shift()
            for (let i = 0; i < chat.length; i++) {
                let el = chat[i]
                if (el === message) {
                    chat.splice(i,1)
                }
            }
        }else if(command === 'Edit'){
            let message = tokens.shift()
            let edited = tokens.shift()
            for (let i = 0; i < chat.length; i++) {
                let el = chat[i]
                if (el === message) {
                    chat.splice(i,1,edited)
                }
            }
        }else if(command==='Pin'){
            let message = tokens.shift()
            for (let i = 0; i < chat.length; i++) {
                let el = chat[i]
                let pinned = chat
                if (el === message) {
                    chat.push(chat.splice(i,1).join(''))
                }
            }
        }else if(command==='Spam'){
            for (let word of tokens) {
                chat.push(word);
            }
        }
        task = commandsArr.shift()
    }
    for (const el of chat) {
        console.log(el);
    }
}
chatLogger(["Chat John",
"Spam Let's go to the zoo",
"Edit zoo cinema",
"Chat tonight",
"Pin John",
"end"])
