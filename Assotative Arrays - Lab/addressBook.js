function addressBook(arr) {
    let addresses = {}
    for (let line of arr) {
        let [name, adress] = line.split(':')
        addresses[name] = adress
    }

    let addressEntries = (Object.entries(addresses)).sort((a, b) => a[0].localeCompare(b[0]))
    for (let entry of addressEntries) {
        console.log(`${entry[0]} -> ${entry[1]}`);
    }
}
addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd'])