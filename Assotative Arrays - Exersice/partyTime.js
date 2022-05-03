function partyTime(arr) {
    let list = new Set()
    while (arr[0] !== 'PARTY') {
        list.add(arr.shift())
    }

    for (let arrGuest of arr) {
            list.delete(arrGuest)
    }

    console.log(list.size);
    let VIP = []
    let notVIP = []
    let restOfList = Array.from(list)
    for (let Guest of restOfList) {
        let firstSymbol = (Guest[0]).charCodeAt(0)
        if (firstSymbol >= 48 && firstSymbol <= 57) {
            VIP.push(Guest)
        } else {
            notVIP.push(Guest)
        }
    }
    if (VIP.length !== 0) {
        console.log(VIP.join('\n'));
    }

    if (notVIP.length !== 0) {
        console.log(notVIP.join('\n'));
    }
}
// function partyTime(arr) {
//     let VIP = new Map()
//     let regular = new Map()
    
//     while (arr[0] !== 'PARTY') {
//         let firstSymbol = (arr[0]).charCodeAt(0)
//         if (firstSymbol >= 48 && firstSymbol <= 57) {
//             VIP.set(arr.shift(), 1)
//         } else {
//             regular.set(arr.shift(), 1)
//         }
//     }
//     arr.shift()
//     let VIParr = Array.from(VIP.keys())
//     let regularArr = Array.from(regular.keys())
//     console.log(arr.length);
//     for (let guest of arr) {
//         let firstSymbol = (guest).charCodeAt(0)
//         if (firstSymbol >= 48 && firstSymbol <= 57) {
//             for (let i = 0; i < VIParr.length; i++) {
//                 if (VIParr[i] ===guest) {
//                     VIParr.splice(i, 1)
//                     break
//                 }
//             }
//         } else {
//             for (let i = 0; i < regularArr.length; i++) {
//                 if (regularArr[i] ===guest) {
//                     VIParr.splice(i, 1)
//                     break
//                 }
//             }
//         }
//     }
//     console.log(VIP.lenght - 1 + regular.lenght - 1);
//     if (VIP.size !== 0) {
//         console.log(VIParr.join('\n'));
//     }
//     if (regular.size !== 0) {
//         console.log(regularArr.join('\n'));
//     }

// }
partyTime(['m8rfQBvl',
    'fc1oZCE0',
    'm8rfQBvl',
    'm8rfQBvl',
    'm8rfQBvl',
    'm8rfQBvl',
    'm8rfQBvl',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'])