function city(city){
    for (let prop of Object.keys(city)) {
        console.log(`${prop} -> ${city[prop]}`);
    }
}
city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)