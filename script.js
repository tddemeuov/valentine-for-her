console.log("SCRIPT LOADED");

document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");

  const questionScreen = document.getElementById("questionScreen");
  const loveScreen = document.getElementById("loveScreen");

  if (!noBtn || !yesBtn) {
    console.error("Кнопки не найдены");
    return;
  }

  noBtn.addEventListener("mouseenter", () => {
    console.log("NO BUTTON RUNNING");
    const parent = noBtn.parentElement;
    const maxX = parent.clientWidth - noBtn.offsetWidth;
    const maxY = parent.clientHeight - noBtn.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  });

  yesBtn.addEventListener("click", () => {
    questionScreen.classList.remove("active");
    setTimeout(() => {
      loveScreen.classList.add("active");
    }, 300);
  });
});
