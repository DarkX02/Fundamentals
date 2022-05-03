function songs(arr) {
    class Songs {
        constructor(typeList, name, time) {
            this.typeList = typeList
            this.name = name
            this.time = time
        }
    }

    let songs = []
    let songsCount = arr.shift()
    let listName = arr.pop()
    for (let i = 1; i <= songsCount; i++) {
        let songInput = arr.shift()
        let tokens = songInput.split('_')
        let typeList = tokens.shift()
        let name = tokens.shift()
        let time = tokens.shift()
        let song = new Songs(typeList, name, time)
        songs.push(song)

    }

    if (listName === 'all') {
        for (let song of songs) {
            console.log(song.name);
        }
    }else{
        for (let song of songs) {
            if (song.typeList===listName) {
                console.log(song.name);
            }
        }
    }
}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
)