const progressBar = document.getElementById("progress-bar");

const startProgressBar = () => {
  progressBar.style.transition = "width 10s linear";
  progressBar.style.width = "100%";
};

document.addEventListener("start-progress-bar", () => {
  startProgressBar();
});
