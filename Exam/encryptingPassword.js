function encryptingPassword(arr){
    let pattern = /^(?<group1>.+)>(?<numbers>[\d]{3})\|(?<lowerCase>[a-z]{3})\|(?<upperCase>[A-Z]{3})\|(?<symbols>[^<>]{3})<\k<group1>$/
    let count = Number(arr.shift())
    for (let i = 0; i < count; i++) {
        let encrypted = arr[i]
        let isMatched = pattern.test(encrypted)
        let match = pattern.exec(encrypted)
        if (isMatched){
            let password = match.groups.numbers.concat(match.groups.lowerCase,match.groups.upperCase,match.groups.symbols)
            console.log(`Password: ${password}`);
        }else{
            console.log('Try another password!');
        }
    }
}
encryptingPassword(["3",
"##>00|no|NO|!!!?<###",
"##>123|yes|YES|!!!<##",
"$$<111|noo|NOPE|<<>$$"])
console.log('-----------');
encryptingPassword(["5",
"aa>111|mqu|BAU|mqu<aa",
"()>111!aaa!AAA!^&*<()",
"o>088|abc|AAA|***<o",
"asd>asd|asd|ASD|asd<asd",
"*>088|zzzz|ZzZ|123<*"])