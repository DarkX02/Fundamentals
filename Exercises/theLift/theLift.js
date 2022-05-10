function theLift(arr) {
    let people = Number(arr.shift())
    let wagoons = arr.shift().split(' ').map(Number)
    for (let i = 0; i < wagoons.length; i++) {
        let passengers = Math.min(4-wagoons[i],people)
        wagoons[i] += passengers
        people -= passengers
        if (people == 0) {
            break
        }
    }
    if (people > 0) {
        console.log(`There isn't enough space! ${people} people in a queue!`);
    } else {
        if (wagoons[wagoons.length - 1] < 4) {
        console.log('The lift has empty spots!');    
        }
    }
    console.log(wagoons.join(' '));
}
theLift([
    "1",
    "0 0 0 0 0 0 0 0 0 0"
   ])