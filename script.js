divContainer = document.querySelector(".grid-container");
createGrid(16);

function hovered(cell) {
    cell.style.backgroundColor = `rgb(${255*Math.random()}, ${255*Math.random()}, ${255*Math.random()})`;
    cell.classList.add("hovered");
}

function resize() {
    let size = parseInt(prompt("Enter new number of squares per side (4-100)"));
    if (!Number.isInteger(size) || size < 1 || size > 100) {
        alert("Please enter a valid number from 1-100.");
        resize();
    }
    createGrid(size);
    document.querySelector(".current-size").textContent = `Current Size: ${size} x ${size}`;    
}

function clearGrid() {
    console.log("Clearing...")
    let filledCells = document.querySelectorAll(".hovered");
    filledCells.forEach(cell => {
        cell.classList.remove("hovered");
        cell.style.backgroundColor = "";
    });
}

function createGrid(size) {
    grid = []
    divContainer.innerHTML = ''
    for (let i = 0; i < size; i++) {
        grid.push([]);
    }
    for (let i = 0; i < size*size; i++) {
        const newDiv = document.createElement('div')
        newDiv.classList.add('cell');
        newDiv.id = `cell-${i+1}`;
        newDiv.style.width = `${800/size}px`;
        newDiv.style.height = `${800/size}px`;
        newDiv.addEventListener('mouseenter', () => hovered(newDiv))
        grid[Math.floor(i/size)].push(newDiv);
    }
    
    for (let i = 0; i < size; i++) {
        const newRow = document.createElement('div');
        newRow.classList.add('row');
        newRow.id = `row-${i+1}`;
        for (cell of grid[i]) {
            newRow.appendChild(cell);
        }
        divContainer.appendChild(newRow);
    }
}