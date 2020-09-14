const colorButton = document.querySelector(".color");

var gridContainer = document.querySelector(".grid-container");
let clicked = false;

colorButton.addEventListener('click', () => {
    if (clicked) {
        clicked = false;

        colorButton.classList.remove("clicked");
    } else {
        clicked = true;
        colorButton.classList.add("clicked");
    }
});

function createGrid(n = 64) {

    let gridWidth = gridContainer.offsetWidth;
    let gridHeight = gridContainer.offsetHeight;
    let width = gridWidth / (n);
    let height = gridHeight / (n);

    console.log(gridHeight, height, gridWidth, width);

    for (let i = 0; i < (n * n); i++) {

        let pix = document.createElement("div");
        pix.classList.add("pix");
        pix.style.width = `${100 / n}%`;
        pix.style.height = `${100 / n}%`;
        console.log()
        gridContainer.appendChild(pix);

        pix.addEventListener("mouseover", function(event) {

        
                if (clicked === true) { 
                    color = getRandomColor();
                } else {
                    color = 'black';
                }
                event.target.style.backgroundColor = color;
            
        });
    }
}

function getRandomColor() {

    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);

    return `rgb(${x}, ${y}, ${z})`;
}

const clearButton = document.querySelector(".clear");

createGrid();

clearButton.addEventListener("click", () => {
    let n = prompt("Enter the grid size");
    resetGrid();
    createGrid(n);
});

function resetGrid() {

    let list = gridContainer.childNodes;
    console.log(list);
    for (let i = 1; i < list.length; i++) {
       list[i].classList.add("hidden");
    }
}