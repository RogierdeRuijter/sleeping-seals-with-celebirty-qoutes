const preloadImage = (src) => {
    const img = new Image();
    img.src = src;
}

const convertNameToAsset = (index) => {
    return 'assets/' + fileNames[index];
}

const initlalPreload = () => {
    for (let i = 1; i < 10; i++) {
        const asset = convertNameToAsset(i);
        console.log(asset);
        preloadImage(asset);
    }
}
initlalPreload();

const preloadIfPossible = () => {
    if (currentIndex + 10 < lengthfileNames) {
        const asset = convertNameToAsset(currentIndex + 10);
    
        preloadImage(asset);
    }
}

document.addEventListener('next-asset', () => {
    preloadIfPossible();
});
