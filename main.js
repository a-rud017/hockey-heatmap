const gridContainer = document.querySelector(".grid-container");
const gridContainerWidth = gridContainer.clientWidth;

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = `${gridContainerWidth / size}px`;
        cell.style.height = `${gridContainerWidth / size}px`;

        gridContainer.appendChild(cell);
    }
}

createGrid(16)