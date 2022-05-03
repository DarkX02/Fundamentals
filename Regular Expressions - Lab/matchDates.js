function matchDates(input){
    let pattern = /(?:^|\s)(?<day>\d{2})(?<separator>\/|\.|-)(?<month>[A-Z][a-z]{2})\k<separator>(?<year>\d{4})/g
    let match = pattern.exec(input)
    let arr = []
    while(match !==null){
        arr.push(match)
        match = pattern.exec(input)
    }
    for (let date of arr) {
        console.log(`Day: ${date.groups.day}, Month: ${date.groups.month}, Year: ${date.groups.year}`);
    }
}
matchDates("13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016")