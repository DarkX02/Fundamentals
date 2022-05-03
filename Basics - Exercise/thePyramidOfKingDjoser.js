function thePyramidOfKingDjoser(base, increment) {
    let stone = 0
    let marble = 0
    let lapisLazuli = 0
    let gold = 0
    let layer = 0
    for (let i = base; i >= 1; i -= 2) {
        layer++
        let pBlocks = (i * 4) - 4
        let vBlocks = i * i
        if (i <= 2) {
            gold += (i * i) * increment
        } else if (layer % 5 === 0) {
            lapisLazuli += pBlocks * increment
            stone += vBlocks - pBlocks
        } else {
            marble += pBlocks * increment
            stone += vBlocks - pBlocks
        }
    }
    stone *= increment
    let height = layer * increment

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
}
thePyramidOfKingDjoser(23, 0.5)