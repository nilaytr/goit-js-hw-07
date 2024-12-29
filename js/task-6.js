function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const input = document.querySelector('.input');
const boxesContainer = document.querySelector('#boxes');

function createBoxes(amount) {
    destroyBoxes();

    let size = 30;
    let boxesHTML = "";

    for (let i = 0; i < amount; i++) {
        boxesHTML += `<div style = "width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}; margin: 5px;"></div>`
        size += 10;
    }

    boxesContainer.innerHTML = boxesHTML;
}

function destroyBoxes() {
    boxesContainer.innerHTML = "";
}

createButton.addEventListener("click", () => {
    const amount = Number(input.value);
    if (amount > 0 && amount <= 100) {
        createBoxes(amount);
        input.value = "";
    }
});

destroyButton.addEventListener("click", () => {
    destroyBoxes();
});
