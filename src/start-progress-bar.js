const onImageLoad = () => {
    document.dispatchEvent(new Event('start-progress-bar'))
};

currentSeal.addEventListener('load', onImageLoad);