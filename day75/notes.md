# 📚 THE COMPLETE NOTESET ON COMPONENTS, PROPS, PROPS DRILLING, TWO-WAY BINDING & CONTEXT API

---

## 🔹 1. COMPONENTS – The Building Blocks of React

### 📘 THEORY

* A **component** in React is a self-contained, reusable chunk of UI.
* Components are like **functions**: they take **inputs (props)** and return **JSX** (UI).
* They **can be stateful (with `useState`) or stateless**.
* Help create **modular**, **maintainable**, and **reusable** UIs.

### 🔄 TYPES OF COMPONENTS

| Type                 | Syntax                                    | When to Use                    |
| -------------------- | ----------------------------------------- | ------------------------------ |
| Functional           | `function Component()`                    | Preferred in modern React      |
| Class-based (legacy) | `class Component extends React.Component` | Rare now, use only if required |

### ✅ BEST PRACTICE

* Keep components **small** and **focused**.
* Create one file per component inside a `/components` folder.
* Export default and import wherever needed.

---

## 🔹 2. PROPS – Data Passed Into Components

### 📘 THEORY

* **Props** (short for “properties”) are how you pass **data from a parent to a child**.
* They are **read-only** in child components (immutable).
* Helps reuse the same component with different data.

### 📦 EXAMPLE

```jsx
const Welcome = ({ name }) => <h1>Hello, {name}</h1>;

// Usage
<Welcome name="Subhchintak" />
```

---

## 🔹 3. TWO-WAY BINDING – UI <=> State (Sync Both Ways)

### 📘 THEORY

* In **two-way binding**, your state updates the UI **and** the UI updates the state.
* Mostly seen in **form inputs**.
* It’s called “controlled components” in React.

### 🔁 FLOW

```jsx
const [text, setText] = useState("");

<input value={text} onChange={(e) => setText(e.target.value)} />
```

> 🔥 Input is **controlled** by React state, and every change updates the state again — full loop sync.

---

## 🔹 4. PROPS DRILLING – When It Gets Annoying

### 📘 THEORY

* **Props drilling** is when you pass the same prop through **multiple layers of components** just to reach a deeply nested one.
* Not only does it clutter the middle components, it also **breaks maintainability**.

### 🧪 EXAMPLE

```jsx
<App>
  <Parent>
    <Child>
      <DeepChild name="Subhchintak" />
    </Child>
  </Parent>
</App>
```

> 🧨 If only `DeepChild` needs `name`, why pass it through `Parent` and `Child`? That’s props drilling.

---

## 🔹 5. CONTEXT API – The Fix for Props Drilling

### 📘 THEORY

* The **Context API** provides a way to **share values** like `props`, **without explicitly passing them down** every level.
* It uses `createContext()`, a `Provider`, and a `useContext()` hook to access it.

### ⚙️ SETUP

```js
// context/UserContext.js
import { createContext } from "react";
const UserContext = createContext(null);
export default UserContext;
```

### ✅ USAGE

```jsx
// App.jsx
<UserContext.Provider value="Subhchintak">
  <DeepChild />
</UserContext.Provider>
```

```jsx
// DeepChild.jsx
import { useContext } from "react";
import UserContext from "../context/UserContext";

const DeepChild = () => {
  const name = useContext(UserContext);
  return <h1>{name}</h1>;
};
```

> 🔥 Now you don’t need to pass `name` through `Parent` and `Child`.

---

## 🗂️ FILE-BY-FILE STRUCTURE

```bash
src/
│
├── App.jsx
├── index.js
├── components/
│   ├── InputForm.jsx
│   ├── DisplayName.jsx
│   ├── DeepChild.jsx
│   ├── DeepChildWithContext.jsx
│
└── context/
    └── UserContext.js
```

---

## 🔧 DETAILED CODE EXAMPLES

### ✅ InputForm.jsx – 2-Way Binding

```jsx
import React from "react";

const InputForm = ({ name, setName }) => {
  return (
    <div>
      <label>Enter Name: </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default InputForm;
```

---

### ✅ DisplayName.jsx – Basic Props

```jsx
const DisplayName = ({ name }) => {
  return <h2>Hello, {name}!</h2>;
};

export default DisplayName;
```

---

### ✅ DeepChild.jsx – Props Drilling Example

```jsx
const DeepChild = ({ name }) => <p>DeepChild says hi to: {name}</p>;

const Child = ({ name }) => <DeepChild name={name} />;
const Parent = ({ name }) => <Child name={name} />;

export default Parent;
```

---

### ✅ DeepChildWithContext.jsx – Context Usage

```jsx
import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const DeepChildWithContext = () => {
  const name = useContext(UserContext);
  return <p>Context says: {name}</p>;
};

export default DeepChildWithContext;
```

---

### ✅ App.jsx – Glue Everything Together

```jsx
import React, { useState } from "react";
import InputForm from "./components/InputForm";
import DisplayName from "./components/DisplayName";
import Parent from "./components/DeepChild";
import DeepChildWithContext from "./components/DeepChildWithContext";
import UserContext from "./context/UserContext";

const App = () => {
  const [name, setName] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h1>🧠 React Deep Dive</h1>
      <InputForm name={name} setName={setName} />
      <DisplayName name={name} />

      <h3>Props Drilling 👇</h3>
      <Parent name={name} />

      <h3>Using Context 🧠</h3>
      <UserContext.Provider value={name}>
        <DeepChildWithContext />
      </UserContext.Provider>
    </div>
  );
};

export default App;
```

---

## 💥 SUMMARY TABLE

| Concept         | TL;DR                                 |
| --------------- | ------------------------------------- |
| Components      | UI pieces, reusable & modular         |
| Props           | Pass data into child components       |
| Two-Way Binding | Sync input ↔ state                    |
| Props Drilling  | Passing props too deep (avoid)        |
| Context API     | Global data provider, avoids drilling |
