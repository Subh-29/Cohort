/*
1. Local Storage
2. Session Storage
3. Cookies

Window Objec */


let btn = document.querySelector(".goto");

btn.addEventListener("click", function() {
    location.href = "https://www.google.com";
});


bwd = document.querySelector("#bwd");
fwd = document.querySelector("#fwd");

bwd.addEventListener("click", function() {
    history.back();

});

fwd.addEventListener("click", function() {
    history.forward();
});

console.log(navigator.userAgent);
console.log(navigator.onLine);



let noteInput = document.getElementById("noteInput");
let saveBtn = document.getElementById("saveBtn");
let notesContainer = document.getElementById("notesContainer");

// Load saved notes on page load
let notes = JSON.parse(localStorage.getItem("notes")) || [];

function showNotes() {
  notesContainer.innerHTML = ""; // clear first
  notes.forEach((note, index) => {
    let div = document.createElement("div");
    div.innerHTML = `
      <p>${note}</p>
      <button onclick="deleteNote(${index})">Delete</button>
    `;
    notesContainer.appendChild(div);
  });
}

// Save note
saveBtn.addEventListener("click", () => {
  let newNote = noteInput.value.trim();
  if (newNote !== "") {
    notes.push(newNote);
    localStorage.setItem("notes", JSON.stringify(notes));
    noteInput.value = "";
    showNotes();
  }
});

// Delete note
function deleteNote(index) {
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  showNotes();
}

// Initial display
showNotes();


let sessionInput = document.getElementById("sessionNoteInput");
let sessionSaveBtn = document.getElementById("sessionSaveBtn");
let sessionContainer = document.getElementById("sessionNotesContainer");

// Load notes from sessionStorage
let sessionNotes = JSON.parse(sessionStorage.getItem("sessionNotesArray")) || [];

function displaySessionNotes() {
  sessionContainer.innerHTML = "";
  sessionNotes.forEach((note, index) => {
    let noteBox = document.createElement("div");
    noteBox.innerHTML = `
      <p>${note}</p>
      <button onclick="deleteSessionNote(${index})">Delete</button>
    `;
    sessionContainer.appendChild(noteBox);
  });
}

sessionSaveBtn.addEventListener("click", () => {
  let newNote = sessionInput.value.trim();
  if (newNote !== "") {
    sessionNotes.push(newNote);
    sessionStorage.setItem("sessionNotesArray", JSON.stringify(sessionNotes));
    sessionInput.value = "";
    displaySessionNotes();
  }
});

function deleteSessionNote(index) {
  sessionNotes.splice(index, 1);
  sessionStorage.setItem("sessionNotesArray", JSON.stringify(sessionNotes));
  displaySessionNotes();
}

// Load existing session notes on page load
displaySessionNotes();
