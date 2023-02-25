const inputEl = document.querySelector("#name-input");
const outputNameEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
    event.target.value === "" ? outputNameEl.textContent = "Anonymous" :
outputNameEl.textContent = event.target.value
    
}) 