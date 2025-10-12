const skillbar = () => {
  const skillBars = document.querySelectorAll(".skill");

  skillBars.forEach((skillBar) => {
    const fill = skillBar.querySelector(".skill-bar__fill");
    const percentage = skillBar.querySelector(".skill-percent");
    const progressAttr = fill.getAttribute("data-progress");
    const progress = progressAttr ? parseInt(progressAttr, 10) : 0;

    // Update the bar width (always safe)
    fill.style.width = `${progress}%`;

    // Skip percentage animation if no value or zero
    if (!percentage || progress <= 0) {
      if (percentage) percentage.textContent = ""; // ensure empty (hidden by CSS)
      return;
    }

    // Animate the counter text
    let counter = 0;
    const intervalTime = Math.max(20, Math.floor(1500 / progress));

    const interval = setInterval(() => {
      if (counter <= progress) {
        percentage.textContent = `${counter}%`;
        counter++;
      } else {
        clearInterval(interval);
      }
    }, intervalTime);
  });
};

export default skillbar;
