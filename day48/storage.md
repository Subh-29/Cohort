---

# 🧠 Web Storage Master Guide: `localStorage` vs `sessionStorage`

---

## 🚀 Overview

Web Storage API provides two key-value storage mechanisms:

| Feature       | `localStorage`                       | `sessionStorage`               |
| ------------- | ------------------------------------ | ------------------------------ |
| Scope         | Origin-wide                          | Per tab/window                 |
| Expiration    | Never (unless manually cleared)      | Expires when tab/window closes |
| Storage Limit | \~5–10 MB                            | \~5 MB                         |
| Persistent    | ✅ Yes                                | ❌ No                           |
| Data Type     | String (serialize/parse for objects) | String (same)                  |

---

## 📦 1. `localStorage` — Permanent Storage in the Browser

### 📝 Basic Operations

```js
// Save data
localStorage.setItem("username", "IronMan");

// Retrieve data
let name = localStorage.getItem("username");
console.log(name); // "IronMan"

// Remove a specific item
localStorage.removeItem("username");

// Clear everything
localStorage.clear();
```

---

### 🧠 Storing Non-String Data (like objects, arrays)

```js
let user = { name: "Tony", age: 45 };

localStorage.setItem("userData", JSON.stringify(user));

let getUser = JSON.parse(localStorage.getItem("userData"));
console.log(getUser.name); // Tony
```

---

### ✅ Real-World Example: Save User Preferences

```js
let theme = "dark";
localStorage.setItem("theme", theme);

// Apply theme on page load
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}
```

---

### 📘 Example: `localStorage` Notes App

```html
<input type="text" id="noteInput" placeholder="Note..." />
<button onclick="saveNote()">Save</button>
<div id="noteList"></div>
```

```js
let notes = JSON.parse(localStorage.getItem("notes")) || [];

function saveNote() {
  let note = document.getElementById("noteInput").value;
  notes.push(note);
  localStorage.setItem("notes", JSON.stringify(notes));
  displayNotes();
}

function displayNotes() {
  document.getElementById("noteList").innerHTML = notes
    .map((n, i) => `<p>${n} <button onclick="deleteNote(${i})">❌</button></p>`)
    .join("");
}

function deleteNote(index) {
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  displayNotes();
}

displayNotes();
```

---

## 🔥 2. `sessionStorage` — Temporary Storage (Per Tab)

### 📝 Basic Operations

```js
// Save
sessionStorage.setItem("cartCount", "5");

// Get
let count = sessionStorage.getItem("cartCount");

// Remove specific
sessionStorage.removeItem("cartCount");

// Clear all
sessionStorage.clear();
```

---

### ✅ Temporary Form Draft Example

```html
<input type="text" id="emailDraft" placeholder="Enter email..." />
```

```js
let emailBox = document.getElementById("emailDraft");

emailBox.value = sessionStorage.getItem("draftEmail") || "";

emailBox.addEventListener("input", () => {
  sessionStorage.setItem("draftEmail", emailBox.value);
});
```

Close the tab, the data’s gone. Reload it, and it still remembers — as long as the tab stays open.

---

### 📘 Example: `sessionStorage` Notes App (Different from local)

```html
<input type="text" id="tempNoteInput" placeholder="Temporary note..." />
<button onclick="saveTempNote()">Save Session Note</button>
<div id="tempNoteList"></div>
```

```js
let tempNotes = JSON.parse(sessionStorage.getItem("tempNotes")) || [];

function saveTempNote() {
  let note = document.getElementById("tempNoteInput").value;
  tempNotes.push(note);
  sessionStorage.setItem("tempNotes", JSON.stringify(tempNotes));
  showTempNotes();
}

function showTempNotes() {
  document.getElementById("tempNoteList").innerHTML = tempNotes
    .map((n, i) => `<p>${n} <button onclick="deleteTemp(${i})">❌</button></p>`)
    .join("");
}

function deleteTemp(index) {
  tempNotes.splice(index, 1);
  sessionStorage.setItem("tempNotes", JSON.stringify(tempNotes));
  showTempNotes();
}

showTempNotes();
```

---

## 🧨 Common Pitfalls & Gotchas

### ❌ Cannot store objects directly

```js
localStorage.setItem("obj", { name: "abc" }); // ❌ This saves as "[object Object]"
```

✅ Always use `JSON.stringify()` and `JSON.parse()`!

---

### ❌ Data limits

* Around **5MB max** — if you go too big, `QuotaExceededError` will hit.

---

### ❌ `sessionStorage` is NOT shared across tabs

* Open the same site in a new tab? `sessionStorage` is empty again.

---

## 🤯 Pro Tips

### 🔄 Sync tabs using `storage` event

```js
window.addEventListener("storage", (e) => {
  console.log("Something changed in localStorage:", e.key);
});
```

---

### 🔁 Auto-save form state

```js
document.querySelectorAll("input, textarea").forEach((field) => {
  const id = field.id;
  field.value = sessionStorage.getItem(id) || "";

  field.addEventListener("input", () => {
    sessionStorage.setItem(id, field.value);
  });
});
```

---

## 🧪 When to Use What?

| Use Case                       | Use `localStorage`        | Use `sessionStorage`   |
| ------------------------------ | ------------------------- | ---------------------- |
| User preferences               | ✅                         | ❌                      |
| Theme or language setting      | ✅                         | ❌                      |
| Form auto-fill in same tab     | ✅ or ❌ (depending on use) | ✅                      |
| Cart state (short-lived)       | ❌                         | ✅                      |
| Auth/session token (temporary) | ❌ (unsafe)                | ✅ (still risky though) |
| Across tabs/windows            | ✅                         | ❌                      |

---

## 🔐 Security Warning

* ❗ Web storage is **not encrypted**
* ❗ Accessible via DevTools
* ❗ Never store passwords, tokens, or sensitive info

---

## 🧼 Best Practices

* Use unique keys for each feature (`"app_theme"` not `"theme"`)
* Wrap complex storage logic into helper functions
* Clear storage on logout/user change
* Compress large data with Base64 or other encoding (if needed)

---