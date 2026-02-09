console.log("SCRIPT LOADED");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const questionScreen = document.getElementById("questionScreen");
const loveScreen = document.getElementById("loveScreen");

let scale = 1;

// ❌ НЕТ — увеличиваем ДА
noBtn.addEventListener("click", () => {
  scale += 0.2;
  yesBtn.style.transform = `scale(${scale})`;
});

// ❤️ ДА — меняем экран
yesBtn.addEventListener("click", () => {
  questionScreen.classList.remove("active");

  setTimeout(() => {
    loveScreen.classList.add("active");
  }, 300);
});