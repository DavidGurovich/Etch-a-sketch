const container = document.getElementById('container')

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        //cell.innerText = (c + 1)
        cell.addEventListener('mouseover', randomColors )
        container.appendChild(cell).className = "grid-item";
        
    }
}
makeRows(16, 16)

// buttons for eraser and clear 
const interface = document.getElementById('interface')

const gridReset = document.createElement('button')
gridReset.innerText = "New Grid"
gridReset.addEventListener('click', newSize);
const clearAll = document.createElement('button');
clearAll.innerText = "Clear";
clearAll.addEventListener('click', handleReset)

interface.appendChild(clearAll);
interface.appendChild(gridReset);
function random(number){
    return Math.floor(Math.random() * (number + 1));
}

function randomColors (e) {
    let color = `rgb(${[0, 0, 0].map(channel => {
        return Math.floor(Math.random() * 256);
      }).join(',')})`
      Object.assign(e.target.style, {
        backgroundColor : color,
        opacity : 0.60
      });
    }


function handleReset(e) {
    while (container.firstChild){
        container.removeChild(container.lastChild)
    }
    makeRows(16, 16)
}

function newSize(e) {
    let newGrid = +prompt("Enter the number of squares per side for the new grid:", )
    while (container.firstChild){
        container.removeChild(container.lastChild)
    }
    makeRows(newGrid, newGrid)
}
