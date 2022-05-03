function spiceMustFlow(startingYield) {
    let days = 0
    spiceEarned = 0
    while (startingYield>=100) {
        days+=1
        spiceEarned+=startingYield
        if (spiceEarned>=26) {
            spiceEarned-=26
        }
        startingYield-=10
    }
    if (spiceEarned>=26) {
        spiceEarned-=26
    }
    console.log(days);
    console.log(spiceEarned);
}
spiceMustFlow(450)