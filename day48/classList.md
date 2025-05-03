

# 📜 The Ultimate Guide to `classList` in JavaScript

---

## 🔍 What is `classList`?

`classList` is a **read-only property** of an element in the DOM that returns a **DOMTokenList** (a special array-like object). It lets you manage classes of an element without having to manually deal with string manipulation. It's like the **magic wand** for adding/removing CSS classes on the fly.

### Basic Usage:

```js
element.classList
```

---

## 🧰 Common Methods of `classList`

### ✅ 1. `add()` – Add one or more classes

```js
let element = document.getElementById("myElement");
element.classList.add("newClass"); // Adds "newClass" to the list
element.classList.add("anotherClass", "thirdClass"); // Multiple classes
```

> Multiple classes can be added at once, and if they already exist, it won’t add them again.

---

### ✅ 2. `remove()` – Remove one or more classes

```js
element.classList.remove("newClass");
element.classList.remove("oldClass", "thirdClass");
```

> Removes the specified class/classes from the element.

---

### ✅ 3. `toggle()` – Toggle a class on/off

```js
element.classList.toggle("active"); // Adds "active" if not present, removes if already present
```

> If the class is already present, it removes it; if not, it adds it. Great for things like **dark/light mode** or **showing/hiding** elements.

---

### ✅ 4. `contains()` – Check if the element has a class

```js
if (element.classList.contains("active")) {
  console.log("Element has 'active' class");
} else {
  console.log("No 'active' class");
}
```

> Returns `true` if the element has the specified class, otherwise `false`.

---

### ✅ 5. `replace()` – Replace one class with another

```js
element.classList.replace("oldClass", "newClass");
```

> Replaces the class `oldClass` with `newClass`. If `oldClass` doesn't exist, this does nothing.

---

### ✅ 6. `toggle()` with second argument – Toggle a class based on a condition

```js
let isActive = true;
element.classList.toggle("active", isActive); // Adds 'active' if isActive is true, removes if false
```

---

## 🧩 Real-Life Examples

### 1️⃣ **Add Classes Dynamically Based on User Input**

```html
<button id="toggleBtn">Toggle Active</button>
<div id="box">I'm a box</div>
```

```js
document.getElementById("toggleBtn").addEventListener("click", () => {
  let box = document.getElementById("box");
  box.classList.toggle("active");
});
```

CSS:

```css
.active {
  background-color: yellow;
}
```

> When the button is clicked, the box will toggle the `active` class, changing its background.

---

### 2️⃣ **Multiple Classes with `add()`**

```js
let element = document.getElementById("box");
element.classList.add("red", "bold", "highlighted");
```

> This adds all three classes to the `box` element at once.

---

### 3️⃣ **Checking if an Element Has a Class**

```js
let header = document.querySelector("h1");
if (header.classList.contains("highlight")) {
  header.style.color = "blue";
} else {
  header.style.color = "red";
}
```

---

### 4️⃣ **Replacing Classes for Visual State Change**

```js
let button = document.getElementById("submitBtn");
button.addEventListener("click", function () {
  button.classList.replace("inactive", "active");
});
```

---

### 5️⃣ **Toggle Class Based on Condition**

```js
let menu = document.getElementById("menu");
let isOpen = false;

function toggleMenu() {
  menu.classList.toggle("open", isOpen);
  isOpen = !isOpen; // Toggle the state
}
```

> Toggling the menu state based on the `isOpen` variable.

---

## 💥 Advanced Techniques

### 1️⃣ **Combine with CSS Transitions**

You can use `classList` to trigger **CSS transitions**:

```html
<div id="box" class="box">Hello!</div>
<button onclick="toggleBox()">Toggle Animation</button>
```

CSS:

```css
.box {
  width: 100px;
  height: 100px;
  background: blue;
  transition: all 0.5s ease;
}
.box.expanded {
  width: 200px;
  height: 200px;
}
```

JavaScript:

```js
function toggleBox() {
  document.getElementById("box").classList.toggle("expanded");
}
```

> The box smoothly transitions its size when the class is toggled.

---

### 2️⃣ **Add/Remove Classes Based on Window Resize**

```js
window.addEventListener("resize", () => {
  if (window.innerWidth < 600) {
    document.body.classList.add("mobile");
  } else {
    document.body.classList.remove("mobile");
  }
});
```

> This toggles the `mobile` class based on the screen size. Handy for responsive design.

---

## ⚠️ Some Important Notes

1. **`classList` is not supported in older browsers like IE9 and below.** If you're working with those, you’ll need to either check for support or use `className` instead.

2. **`classList` is non-destructive.** When adding classes, it won't replace the entire `class` attribute, unlike using `className`.

3. **Multiple `toggle()` Calls**:

   * If you call `toggle("active")` multiple times on an element, it'll continuously add/remove the class. It’s important to handle this carefully in situations where **only one class** should be present.

---

## 🧑‍💻 Full Example with Dynamic Classes

Let’s create a simple **to-do list** app where we toggle between "completed" and "active" states.

```html
<ul id="todo-list">
  <li class="todo-item">Buy groceries</li>
  <li class="todo-item">Finish homework</li>
  <li class="todo-item">Clean the house</li>
</ul>
```

```js
let todos = document.querySelectorAll(".todo-item");

todos.forEach((todo) => {
  todo.addEventListener("click", () => {
    todo.classList.toggle("completed"); // Mark item as completed
  });
});
```

CSS:

```css
.todo-item {
  cursor: pointer;
  margin: 10px 0;
}

.completed {
  text-decoration: line-through;
  color: gray;
}
```

> Clicking on a to-do item will mark it as completed by toggling the `completed` class.

---

## 📌 Quick Cheatsheet for `classList`

| Method                       | Description                                        |
| ---------------------------- | -------------------------------------------------- |
| `add()`                      | Adds one or more classes.                          |
| `remove()`                   | Removes one or more classes.                       |
| `toggle()`                   | Adds or removes a class depending on its presence. |
| `contains()`                 | Checks if the element has a certain class.         |
| `replace()`                  | Replaces one class with another.                   |
| `toggle()` (with second arg) | Toggles a class based on a condition.              |

---