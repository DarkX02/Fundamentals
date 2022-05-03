function dungeonestDark(input) {
    input.push('|')
    let instructions = input.join('')
        let startIndex = 0
        let roomArr = []
    let numArr = []


    for (let i = 0; i < instructions.length; i++) {
        let pushArrRoom = []
        let pushArrNum = []
        let element = instructions[i];
        if (element === '|') {

            for (let j = startIndex; j < i; j++) {
                let char = instructions[j];
                if (char !== ' ') {
                    pushArrRoom.push(char)
                } else {
                    for (let k = j + 1; k < i; k++) {
                        let char2 = Number(instructions[k]);
                        pushArrNum.push(char2)
                    }
                    break
                }
            }
            startIndex = i + 1
            roomArr.push(pushArrRoom.join(''))
            numArr.push(pushArrNum.join(''))
            pushArrRoom = []
            pushArrNum = []
        }
    }
    console.log(roomArr);
    console.log(numArr);
    let health = 100
    let coins = 0
    for (let i = 0; i < roomArr.length; i++) {
        let room = roomArr[i];
        let num = Number(numArr[i]);
        if (room === 'potion') {
            health += num
            if (health > 100) {
                num -= health - 100
                health = 100
            }
            console.log(`You healed for ${num} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (room === 'chest') {
            coins += num
            console.log(`You found ${num} coins.`);
        } else {
            health -= num
            if (health <= 0) {
                console.log(`You died! Killed by ${room}.`);
                console.log(`Best room: ${i + 1}`);
                return
            } else {
                console.log(`You slayed ${room}.`);
            }
        }

    }

    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])