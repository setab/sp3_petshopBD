// smooth scrool down animation

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    targetElement.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// progress bar animation

function animateProgressBar(
  barSelector,
  percentSelector,
  targetValue,
  duration
) {
  const progressBar = document.querySelector(barSelector);
  const percentNum = document.querySelector(percentSelector);

  let start = null;
  const initialValue = 0;

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const progressPercentage = Math.min(
      initialValue + (progress / duration) * targetValue,
      targetValue
    );

    progressBar.style.width = progressPercentage + "%";
    percentNum.textContent = Math.round(progressPercentage) + "%";

    if (progressPercentage < targetValue) {
      window.requestAnimationFrame(step);
    }
  }

  window.requestAnimationFrame(step);
}

// Start
animateProgressBar(".progress-bar-1", "#percent-num-1", 95, 2000); // 2 seconds duration
animateProgressBar(".progress-bar-2", "#percent-num-2", 75, 2000); // 2 seconds duration
