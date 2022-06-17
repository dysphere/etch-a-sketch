function changeGridSize(size) {
const container = document.querySelector(".container");
for (let i = 0; i < size; i++) {
    const containerRow = document.createElement("div");
    containerRow.classList.add("row");
    container.appendChild(containerRow);
    for (let j = 0; j < size; j++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("rowDiv");
        containerRow.appendChild(rowDiv);
    }
}
const divBoxes = document.querySelectorAll(".rowDiv");
divBoxes.forEach((rowDiv) => {
    rowDiv.addEventListener("mouseenter", () => {
        rowDiv.classList.add("colorChange");
    });
});
}

changeGridSize(16);

const button = document.querySelector(".choice");
button.addEventListener("click", () => {
    let sizeString = prompt("How many squares do you want per side in your grid?");
    let size = parseInt(sizeString);
    const container = document.querySelector(".container");
    while (container.firstChild) {
        while (container.firstChild.firstChild) {
            container.firstChild.removeChild(container.firstChild.firstChild);
        }
        container.removeChild(container.firstChild);
    }
    changeGridSize(size);
});