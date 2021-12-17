const preloadImage = (src) => {
    const img = new Image();
    img.src = src;
}

const initlalPreload = () => {
    for (let i = 1; i < 3; i++) {
        const asset = convertNameToAsset(i);
        preloadImage(asset);
    }
}
initlalPreload();

const preloadIfPossible = () => {
    if (currentIndex + 3 < lengthfileNames) {
        const asset = convertNameToAsset(currentIndex + 3);
    
        preloadImage(asset);
    }
}

document.addEventListener('next-asset', () => {
    preloadIfPossible();
});

