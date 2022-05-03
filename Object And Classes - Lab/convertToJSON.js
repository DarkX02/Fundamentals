function convertToJSON(firstName, lastName, hairColor){
    let person = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor
    }
    let JSONstring = JSON.stringify(person)
    console.log(JSONstring);
}
convertToJSON('George', 'Jones', 'Brown')