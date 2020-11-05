const lengthfileNames = fileNames.length;

function shuffleArray (array) {
    for (var i = array.length - 1; i > 0; i--) {
        var rand = Math.floor(Math.random() * (i + 1));
        [array[i], array[rand]] = [array[rand], array[i]]
    }
}
    
const shuffleFileNames = () => {
    shuffleArray(fileNames);
}

shuffleFileNames();
