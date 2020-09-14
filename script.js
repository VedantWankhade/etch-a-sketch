const gridContainer = document.querySelector(".grid-container");
const colorButton = document.querySelector(".color");

let clicked = false;

colorButton.addEventListener('click', () => {
    if (clicked) {
        clicked = false;
    } else 
    clicked = true;
})

function createGrid(n) {

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
createGrid(16);