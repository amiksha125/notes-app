const notesContainer = document.querySelector(".notes-container");

const createNoteBtn = document.querySelector(".btn");

let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes"); // if the notes are stored in browser this func will display whenever u open.
}

showNotes();

createNoteBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    inputBox.className = "input-box";

    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.jpg";

    notesContainer.appendChild(inputBox).appendChild(img); // now it is added when u click create button

})


notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    } else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(note =>{
            note.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

// to store your ntes after refresh 

function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML); // whatever there in a notes para box it is stored in our browser


}