function minerTask(arr){
    let materials = {}
    for (let i = 0; i < arr.length; i+=2) {
        let material = arr[i]
        let qty = Number(arr[i+1])
        if (!materials.hasOwnProperty(material)) {
            materials[material] = qty
        }else{
            materials[material] += qty
        }
    }
    for(let key in materials){
        console.log(`${key} -> ${materials[key]}`);
    }
}
minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'])