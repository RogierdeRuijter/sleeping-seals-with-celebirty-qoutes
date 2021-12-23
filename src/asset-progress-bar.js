const progressBar = document.getElementById("progress-bar");
let progressBarWidth = 0;

let eventNotFired = true;

const progressStep = () => {
  progressBar.style.transition = "width 10s linear";
  progressBar.style.width = "100%";
};

const startProgressBar = () => {
  startTimeProgressBar = null;
  eventNotFired = true;

  console.log("startProgressBar");

  progressStep();
};

// document.getElementById("progress-bar").style.width = "0";

document.addEventListener("start-progress-bar", () => {
  startProgressBar();
});
