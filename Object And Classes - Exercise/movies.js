function movies(arr) {
    let movies = []
    for (let line of arr) {
        if (line.includes('addMovie')) {
            let movieName = line.split('addMovie ')[1]
            let movie = {
                name: movieName
            }
            movies.push(movie)
        } else if (line.includes('directedBy')) {
            let tokens = line.split(' directedBy ')
            let movieName = tokens.shift()
            let director = tokens.shift()
            let movie = movies.find(obj => obj.name === movieName)
            if (movie) {
                movie.director = director
            }
        } else if (line.includes('onDate')) {
            let tokens = line.split(' onDate ')
            let movieName = tokens.shift()
            let date = tokens.shift()
            let movie = movies.find(obj => obj.name === movieName)
            if (movie) {
                movie.date = date
            }
        }
    }
    for (let movie of movies) {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    }
}
movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'])