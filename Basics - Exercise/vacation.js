function vacation(number, type, day) {
    let price = 0
    let sum = 0
    switch (type) {
        case 'Students':
            switch (day) {
                case 'Friday':
                    price = 8.45
                    break
                case 'Saturday':
                    price = 9.80
                    break
                case 'Sunday':
                    price = 10.46
                    break
            }
            sum = number * price
            if (number >= 30) {
                sum *= 0.85
            }
            break
        case 'Business':
            if (number >= 100) {
                number -= 10
            }
            switch (day) {
                case 'Friday':
                    price = 10.90
                    break
                case 'Saturday':
                    price = 15.60
                    break
                case 'Sunday':
                    price = 16
                    break
            }
            sum = number * price
            break
        case 'Regular':
            switch (day) {
                case 'Friday':
                    price = 15
                    break
                case 'Saturday':
                    price = 20
                    break
                case 'Sunday':
                    price = 22.50
                    break
            }
            sum = number * price
            if (number >= 10 && number <= 20) {
                sum *= 0.95
            }
            break
    }
    console.log(`Total price: ${sum.toFixed(2)}`);
}
vacation(40,
    "Regular",
    "Saturday"
    )