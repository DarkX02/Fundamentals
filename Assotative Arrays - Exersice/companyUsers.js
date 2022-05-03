function companyUsers(arr) {
    let companies = {}
    for (let line of arr) {
        let [name, employee] = line.split(' -> ')
        if (!companies.hasOwnProperty(name)) {
            companies[name] = new Set()
        }
        companies[name].add(employee)
    }
    let sortedKeys = Object.keys(companies).sort((a, b) => a.localeCompare(b))
    for (let key of sortedKeys) {
        let employees = Array.from(companies[key])
        console.log(key);
        employees.forEach(employee => console.log(`-- ${employee}`))
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
    )