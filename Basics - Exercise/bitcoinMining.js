function bitcoinMining(input) {
    let index = 0
    let days = 0
    let sum = 0
    let bitcoinAmount = 0
    let firstBitcoinDay = 0

    for (let i = 0; i < input.length; i++) {
        days++
        let goldAmount = input[i]
        if (days % 3 == 0) {
            goldAmount *= 0.70
        }
        sum += goldAmount * 67.51
        while (sum >= 11949.16) {
            sum -= 11949.16
            bitcoinAmount += 1
            if (firstBitcoinDay === 0) {
                firstBitcoinDay = days
            }
        }

    }
    console.log(`Bought bitcoins: ${bitcoinAmount}`);
    if (firstBitcoinDay > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }
    console.log(`Left money: ${sum.toFixed(2)} lv.`);
}
bitcoinMining([3124.15, 504.212, 2511.124])