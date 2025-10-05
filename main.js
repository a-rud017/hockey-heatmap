const gridContainer = document.querySelector(".grid-container");
const gridContainerWidth = gridContainer.clientWidth;
const gridContainerHeight = gridContainer.clientHeight;

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = `${gridContainerWidth / size}px`;
        cell.style.height = `${gridContainerHeight / size}px`;
        cell.dataset.clicks = 0;

        cell.addEventListener('click', shadeCell)

        gridContainer.appendChild(cell);
    }
}

createGrid(24)

function shadeCell(event) {
    let clicks = Number(event.target.dataset.clicks);
    clicks++;
    event.target.dataset.clicks = clicks;

    event.target.style.backgroundColor = `rgba(255, 0, 0, ${clicks * 0.1})`;
}