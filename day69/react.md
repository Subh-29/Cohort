

# 📘 React.js Complete Theory

React is a **JavaScript library** for building **user interfaces**, maintained by **Meta (Facebook)**. It allows developers to create **reusable UI components**, manage application state, and efficiently render updates.

---

## 🌱 Table of Contents

1. [Introduction to React](#introduction-to-react)
2. [JSX](#jsx)
3. [Components]\(#components)
3. [Props](#props)
4. [State](#state)
5. [Lifecycle Methods](#lifecycle-methods)
6. [Hooks](#hooks)
7. [Events in React](#events-in-react)
8. [Conditional Rendering](#conditional-rendering)
9. [Lists and Keys](#lists-and-keys)
10. [Forms in React](#forms-in-react)
11. [Lifting State Up](#lifting-state-up)
12. [Context API](#context-api)
13. [React Router](#react-router)
14. [React vs Other Frameworks](#react-vs-other-frameworks)
15. [Best Practices](#best-practices)

---

## 📌 1. Introduction to React

* Created by **Jordan Walke**, a software engineer a Facebook.
* Released in **2013**.
* React allows for **declarative programming**, **virtual DOM**, and **component-based architecture**.

---

## 🔤 2. JSX (JavaScript XML)

* A syntax extension that allows writing HTML-like code in JavaScript.
* Example:

```jsx
const element = <h1>Hello, World!</h1>;
```

* JSX gets compiled int `React.createElement()` by Babel.

---

## 🧩 3. Components

React apps are made of **components**. There are two types:

### 3.1 Functional Components

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

### .2 Class Components

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

---

## � 4. Props (Properties)

* Passed from **parent to child** component.
* **Read-only**.
* Used to customize and reuse components.

```jsx
<Welcome name="John" />
```

---

## 🧠 5. State

* State is data **local to a component**.
* Use `useState` in functional components.

```jsx
const [count, setCount] = useState(0);
```

* In class components:

```jsx
this.state = { count: 0 };
this.setState({ count: this.state.count + 1 });
```

---

## 🕰️ 6. Lifecycle Methods

Applicable only in class components:

* `componentDidMount()` — Runs after first render.
* `componentDidUpdate()` — Runs after updates.
* `componentWillUnmount()` — Cleanup before component is removed.

---

## 🪝 7. Hooks (Functional Component Lifelines)

Hooks let you use state and other React features **without classes**.

* `useState()` — state management
* `useEffect()` — side-effects
* `useContext()` — use context
* `useRef()` — access DOM nodes
* `useMemo()` — optimize performance
* `useCallback()` — memoize functions
* `useReducer()` — state management alternative to useState

---

## 🔘 8. Events in React

React handles events similarly to DOM, but with camelCase:

```jsx
<button onClick={handleClick}>Click Me</button>
```

Use functions to handle logic.

---

## 🔀 9. Conditional Rendering

Use `if`, `ternary`, or logical `&&`:

```jsx
{isLoggedIn ? <Dashboard /> : <Login />}
```

---

## 📋 10. Lists and Keys

Render arrays with `map()` and add `key`:

```jsx
{items.map(item => (
  <li key={item.id}>{item.name}</li>
))}
```

---

## 🧾 11. Forms in React

Forms are **controlled components** — input value is tied to state.

```jsx
const [value, setValue] = useState("");

<input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
```

---

## ⬆️ 12. Lifting State Up

Move state **to the closest common ancestor** to share data between components.

---

## 🌐 13. Context API

Avoid prop drilling. Create context and provide globally:

```jsx
const ThemeContext = React.createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}
```

Use `useContext(ThemeContext)` to access the value.

---

## 🚦 14. React Router (Routing Library)

Use `react-router-dom` to handle routing.

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>
```

---

## 🥊 15. React vs Other Frameworks

| Feature        | React       | Angular    | Vue          |
| -------------- | ----------- | ---------- | ------------ |
| Type           | Library     | Framework  | Framework    |
| Language       | JS/JSX      | TypeScript | HTML + JS    |
| Learning Curve | Moderate    | Steep      | Easy to Mod. |
| DOM            | Virtual DOM | Real DOM   | Virtual DOM  |
| Data Binding   | One-way     | Two-way    | Two-way      |

---

## ✅ 16. Best Practices

* Break UI into **small reusable components**.
* Use **keys** in lists for performance.
* Keep components **pure** and **stateless** when possible.
* Avoid deep prop drilling — use **Context API** or **state management libraries** like Redux or Zustand.
* Use **Earies** to catch rendering errors.

---

## 📚 Bonus: Popular Libraries with React

* **Redux**: Global state management
* **React Query / TanStack Query**: Data fetching and caching
* **Framer Motion**: Animations
* **React Hook Form / Formik**: Form handling
* **Tailwind CSS**: Styling
* **Axios**: API calls
* **React Testing Library / Jest**: Testing

---
