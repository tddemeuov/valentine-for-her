const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

const questionScreen = document.getElementById("questionScreen");
const loveScreen = document.getElementById("loveScreen");

noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener("click", () => {
  questionScreen.classList.remove("active");
  setTimeout(() => {
    loveScreen.classList.add("active");
  }, 500);
});