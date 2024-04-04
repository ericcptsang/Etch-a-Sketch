const container = document.querySelector("#container");
const button = document.createElement("button");
let row;
let box;

function createGrid(size){
    
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


createGrid(16);

