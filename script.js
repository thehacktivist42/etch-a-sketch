divContainer = document.querySelector(".grid-container");
for (let i = 0; i < 16; i++) {
    const newDiv = document.createElement('div')
    newDiv.textContent = `${i+1}`;
    newDiv.classList.add('cell');
    newDiv.id = `cell-${i+1}`;
    divContainer.appendChild(newDiv);
}