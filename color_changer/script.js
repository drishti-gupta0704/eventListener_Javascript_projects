const colorBox = document.getElementById("colorBox");


function getRandomColor() {
  const r = Math.floor(Math.random() * 256); // 0-255
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}


colorBox.addEventListener("mouseenter", () => {
  colorBox.style.backgroundColor = "skyblue";
});


colorBox.addEventListener("mouseleave", () => {
  colorBox.style.backgroundColor = "lightgray";
});


colorBox.addEventListener("click", () => {
  const randomColor = getRandomColor();
  colorBox.style.backgroundColor = randomColor;
});
