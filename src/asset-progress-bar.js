const progressBar = document.getElementById('progress-bar');
let progressBarWidth = 0;

let startTimeProgressBar = null;
let eventNotFired = true;

const progressStep = (timestamp) => {
    if (!startTimeProgressBar) {
        startTimeProgressBar = timestamp;
    }
    
    let progress = timestamp - startTimeProgressBar;
    
    progressBar.style.width = Math.min(progress / 80, 100) + '%';

    if (progress < 8000) {
        requestAnimationFrame(progressStep);
    } else if (eventNotFired === true) {
        createNextAssetEvent();
        eventNotFired = false;
    }
};

const startProgressBar = () => {
    progressBarWidth = 0;
    startTimeProgressBar = null;
    eventNotFired = true;

    requestAnimationFrame(progressStep);
}


document.addEventListener('next-asset', () => {
    startProgressBar();
});
