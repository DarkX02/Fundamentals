function catsAge(catsArr){
    class Cats{
        constructor(name,age){
            this.name = name
            this['age'] = age
        }

        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let cats = []
    for (let cat of catsArr) {
        let tokens = cat.split(' ')
        let catName = tokens.shift()
        let catAge = Number(tokens.shift())
        let newCat = new Cats(catName,catAge)
        cats.push(newCat)
        newCat.meow()
    }
}
catsAge(['Mellow 2', 'Tom 5'])