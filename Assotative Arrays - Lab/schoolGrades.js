function schoolGrades(arr) {
    let studentGrades = {}
    for (let line of arr) {
        let tokens = line.split(' ')
        let name = tokens.shift()
        let grades = tokens.map(Number)
        if (studentGrades.hasOwnProperty(name)) {
            grades.forEach(element => studentGrades[name].push(element));
        } else {
            studentGrades[name] = grades
        }
    }
    let sortedKeys = (Object.keys(studentGrades)).sort((a, b) => a.localeCompare(b))
    for (let key of sortedKeys) {
        let sum = 0
        studentGrades[key].forEach(grade => sum += grade)
        sum /= studentGrades[key].length
        console.log(`${key}: ${sum.toFixed(2)}`);
    }

}
schoolGrades(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3'])