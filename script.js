const container = document.querySelector("#container");

let row;
let box;

function createGrid(rows, columns){
    for(let i = 0; i < rows; i++){
        row = document.createElement("row");
        row.textContent = i;
        row.classList.add("row")
        container.appendChild(row);

        for(let j = 1; j < columns; j++) {
            box = document.createElement("column");
            box.classList.add("box")
            box.textContent = j;
            row.appendChild(box);
        }
    }
}

createGrid(16, 16);

