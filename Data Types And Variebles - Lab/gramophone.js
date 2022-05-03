function gramophone(bandName, albumName, songName) {
    let songDuration = (albumName.length * bandName.length) * songName.length / 2
    let rotstions = songDuration / 2.5
    console.log(`The plate was rotated ${Math.ceil(rotstions)} times.`);
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs')