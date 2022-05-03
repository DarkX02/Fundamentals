function theatrePromotions(day, age) {
    age = Number(age)
    let price = 0
    let isTrue = true

    if (age >= 0 && age <= 18) {
        switch (day) {
            case 'Weekday':
                price = 12
                break
            case 'Weekend':
                price = 15
                break
            case 'Holiday':
                price = 5
                break
            default:
                isTrue = false
                console.log('Error!');
                break
        }
    } else if (age > 18 && age <= 64) {
        switch (day) {
            case 'Weekday':
                price = 18
                break
            case 'Weekend':
                price = 20
                break
            case 'Holiday':
                price = 12
                break
            default:
                isTrue = false
                console.log('Error!');
                break
        }
    } else if (age > 64 && age <= 122) {
        switch (day) {
            case 'Weekday':
                price = 12
                break
            case 'Weekend':
                price = 15
                break
            case 'Holiday':
                price = 10
                break
            default:
                isTrue = false
                console.log('Error!');
                break
        }
    } else {
        isTrue = false
        console.log('Error!');
    }

    if (isTrue === true) {
        console.log(`${price}$`);
    }
}
theatrePromotions('Holiday', -12)