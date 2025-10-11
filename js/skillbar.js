const skillbar = () => {
  const skillBars = document.querySelectorAll(".skill");
  skillBars.forEach((skillBar) => {
    const fill = skillBar.querySelector(".skill-bar__fill");
    const percentage = skillBar.querySelector(".skill-percent");
    const progress = parseInt(fill.getAttribute("data-progress"), 10) || 0;
    fill.style.width = `${progress}%`;

    let counter = 0;
    // protect against division by zero / very small numbers
    const intervalTime = progress > 0 ? Math.max(20, Math.floor(1500 / progress)) : 0;
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
