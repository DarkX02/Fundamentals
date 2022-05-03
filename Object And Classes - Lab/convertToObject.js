function convertToObject(objAsString){
    let obj = JSON.parse(objAsString)
    for (let prop of Object.keys(obj)) {
        console.log(`${prop}: ${obj[prop]}`);
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')