let currentIndex = 0;

const createNextAssetEvent = () => {
    document.dispatchEvent(new Event('next-asset'))
}

document.addEventListener('click', () => {
    if (currentIndex < lengthfileNames) {
        createNextAssetEvent();
    } else {
        reset();
    }
});

const showNextAsset = () => {
    currentSeal.src = convertNameToAsset(currentIndex);
    currentIndex = currentIndex + 1;   
}
document.addEventListener('next-asset', () => {
    showNextAsset();
});

const start = () => {
    createNextAssetEvent();
}

start();