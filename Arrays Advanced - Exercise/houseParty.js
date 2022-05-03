function houseParty(arr) {
    let namesArr = []
    for (let i = 0; i < arr.length; i++) {
        let action = arr[i];
        let tokens = action.split(' ')
        let name = tokens.shift()
        let isOnTheList = false
        if (tokens.length < 3) {
            for (let j = 0; j < namesArr.length; j++) {
                let curName = namesArr[j];
                if (curName === name) {
                    isOnTheList = true
                    console.log(`${name} is already in the list!`);
                    break
                }
            }
            if (isOnTheList === false) {
                namesArr.push(name)
            }
        } else {
            for (let j = 0; j < namesArr.length; j++) {
                let curName = namesArr[j];
                if (curName === name) {
                    isOnTheList = true
                    namesArr.splice(j,1)
                    break
                }
            }
            if (isOnTheList === false) {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(namesArr.join('\n'));
}
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!'])