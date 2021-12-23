let currentIndex = 0;

const createNextAssetEvent = () => {
  document.dispatchEvent(new Event("next-asset"));
};

document.addEventListener("click", () => {
  if (currentIndex < lengthfileNames) {
    createNextAssetEvent();
  } else {
    reset();
  }
});

let nextSealTimeout;
let nextSealAnimationFrame;
const showNextAsset = () => {
  currentSeal.src = convertNameToAsset(currentIndex);
  currentIndex = currentIndex + 1;

  clearTimeout(nextSealTimeout);

  progressBar.style.transition = "width 0s linear";
  progressBar.style.width = "0%";

  nextSealTimeout = setTimeout(() => {
    cancelAnimationFrame(nextSealAnimationFrame);
    nextSealAnimationFrame = requestAnimationFrame(() => {
      createNextAssetEvent();
    });
  }, 10000);
};
document.addEventListener("next-asset", () => {
  showNextAsset();
});

const start = () => {
  createNextAssetEvent();
};

start();
