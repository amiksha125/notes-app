const notesContainer = document.querySelector(".notes-container");

const createNoteBtn = document.querySelector(".btn");

let notes = document.querySelectorAll(".input-box");

createNoteBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    inputBox.className = "input-box";

    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.jpg";

    notesContainer.appendChild(inputBox).appendChild(img); // now it is added when u click create button

})
