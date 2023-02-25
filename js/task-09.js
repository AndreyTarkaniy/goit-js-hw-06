
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }


  const colorEl = document.querySelector(".color");
  const changeBtnColor = document.querySelector(".change-color");
  const backgroundColor = document.querySelector("body");

  changeBtnColor.addEventListener("click", (event) => {
  event = getRandomHexColor();
  console.log(event);

    backgroundColor.style.backgroundColor = event;
    colorEl.textContent = event;
  })