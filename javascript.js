const container = document.querySelector(".container");
for (let i = 0; i < 16; i++) {
    const containerRow = document.createElement("div");
    containerRow.classList.add("row");
    container.appendChild(containerRow);
    for (let j = 0; j < 16; j++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("rowDiv");
        containerRow.appendChild(rowDiv);
    }
}