function employees(arr){
    let employee = {}
    for (let person of arr) {
        employee.name = person
        employee.personalNumber = person.length
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`);
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )