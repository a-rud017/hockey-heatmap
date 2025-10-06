//Initialize grid variable, grab width and height
const gridContainer = document.querySelector(".grid-container");
const gridContainerWidth = gridContainer.clientWidth;
const gridContainerHeight = gridContainer.clientHeight;

//Create the grid cells and add event listeners to each cell for shading function
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

//Grab the cells current click count, increase the count and save count, increase shade by amount of clicks
function shadeCell(event) {
    let clicks = Number(event.target.dataset.clicks);
    clicks++;
    event.target.dataset.clicks = clicks;

    event.target.style.backgroundColor = `rgba(255, 0, 0, ${clicks * 0.1})`;
}

//Initialize reset button variable and add event listener to reset the grid cells
const resetButton = document.querySelector(".reset-btn");
resetButton.addEventListener('click', resetGrid)

//Reset the grid cells back to zero clicks and no background color
function resetGrid() {
    const cells = document.querySelectorAll(".cell")

    for (let i = 0; i < cells.length; i++) {
        cells[i].dataset.clicks = 0;
        cells[i].style.backgroundColor = "";
    }
}