function softUniReception(arr) {
    let answersPerHour = 0
    let students = Number(arr.pop())
    let hours = 0
    for (let i = 0; i < 3; i++) {
        answersPerHour += Number(arr[i])
    }
    while (students > 0) {
        hours++
        if (!(hours % 4 === 0)) {
            students -= answersPerHour
        }
    }
    console.log(`Time needed: ${hours}h.`);
}
softUniReception(['3','2','5','40'])