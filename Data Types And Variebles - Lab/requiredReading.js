function requiredReading(pageNumber, pagesRead, days) {
    let result = pageNumber / pagesRead
    let hoursPerDay = result / days
    console.log(hoursPerDay);
}
requiredReading(432, 15, 4)