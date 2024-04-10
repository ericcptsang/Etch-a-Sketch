const container = document.querySelector("#container");
const clearButton = document.querySelector("#clearButton");
const sizeButton = document.querySelector("#sizeButton");
let row;
let box;
let size = 16;

function createGrid(size) {
    
    for(let i = 0; i < size; i++){
        row = document.createElement("row");
        row.classList.add("row")
        for(let j = 0; j < size; j++) {
            box = document.createElement("column");
            box.classList.add("box")
            box.addEventListener('mouseover', function() {
                this.style.backgroundColor = '#000000';
            })
            row.appendChild(box);
        }
        container.appendChild(row);
    }
    
}

function clear(){
    let getBoxes = document.querySelectorAll(".box");
    for(let i = 0; i < getBoxes.length; i++){
        getBoxes[i].style.backgroundColor = '#FFFFFF';
    }
}

clearButton.addEventListener("click", clear)

sizeButton.addEventListener("click", () => {
    let input = Number(prompt("Input square size (1-100)"))
    while(input < 1 || input >100) {
        input = Number(prompt("Please input 1-100!"))
    }
    size = input;
    container.innerHTML = '';
    createGrid(size);
})


createGrid(size);

