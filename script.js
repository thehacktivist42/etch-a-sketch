divContainer = document.querySelector(".grid-container");
let grid = [];
for (let i = 0; i < 16; i++) {
    grid.push([]);
}

for (let i = 0; i < 256; i++) {
    const newDiv = document.createElement('div')
    newDiv.classList.add('cell');
    newDiv.id = `cell-${i+1}`;
    newDiv.addEventListener('mouseenter', () => hovered(newDiv))
    grid[Math.floor(i/4)].push(newDiv);
}

for (let i = 0; i < 4; i++) {
    const newRow = document.createElement('div');
    newRow.classList.add('row');
    newRow.id = `row-${i+1}`;
    for (cell of grid[i]) {
        newRow.appendChild(cell);
    }
    divContainer.appendChild(newRow);
}

function hovered(cell) {
    cell.classList.add('hovered');
}