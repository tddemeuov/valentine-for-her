console.log("SCRIPT LOADED");

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

console.log("noBtn:", noBtn);
console.log("yesBtn:", yesBtn);

noBtn.addEventListener("mouseenter", () => {
  console.log("NO BUTTON HOVER");

  const parent = noBtn.parentElement;
  const maxX = parent.clientWidth - noBtn.offsetWidth;
  const maxY = parent.clientHeight - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener("click", () => {
  alert("Ты моя валентинка ❤️");
});