function extractFile(text) {
    // text = text.split('\\')
    // let file = text.pop()
    let tokens = text.split('\\').pop().split('.')
    let extension = tokens.pop()
    let fileName = tokens.join('.')
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}
extractFile('C:\\Projects\\Data-Structures\\LinkedList.bak.cs')