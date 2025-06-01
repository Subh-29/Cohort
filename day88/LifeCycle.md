# 🚀 React Component Lifecycle – Full Breakdown (with Hooks + Class)

### 🧠 React has 3 main phases for components:

1. **Mounting** → Component is born 👶
2. **Updating** → Component gets new data or state 💉
3. **Unmounting** → Component is removed 💀

---

## ⚛️ 1. **CLASS COMPONENT LIFECYCLE**

### 💡 Mounting (when component loads for first time):

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log("Constructor"); // setup state, bind methods
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps"); // rarely used
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount"); // perfect for API calls
  }

  render() {
    return <h1>Hello</h1>;
  }
}
```

### ⚡ Updating (when props/state change):

```jsx
shouldComponentUpdate(nextProps, nextState) {
  console.log("shouldComponentUpdate");
  return true; // Control re-rendering
}

getSnapshotBeforeUpdate(prevProps, prevState) {
  console.log("getSnapshotBeforeUpdate");
  return null; // mostly for scrolling stuff
}

componentDidUpdate(prevProps, prevState, snapshot) {
  console.log("componentDidUpdate"); // great for reacting to prop/state change
}
```

### 💣 Unmounting:

```jsx
componentWillUnmount() {
  console.log("componentWillUnmount"); // cleanup (clear timers, listeners)
}
```

---

## ⚛️ 2. **FUNCTION COMPONENT LIFECYCLE (Hooks Style)**

No lifecycle methods here — instead, **`useEffect()`** is the goddamn king.

```jsx
import { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    console.log("Mounted"); // like componentDidMount

    return () => {
      console.log("Unmounted"); // like componentWillUnmount
    };
  }, []); // empty dependency array = run only once

  return <h1>Hello</h1>;
}
```

---

### ⚡ useEffect Variants:

| Code                                          | Phase   | Meaning                 |
| --------------------------------------------- | ------- | ----------------------- |
| `useEffect(() => {...}, [])`                  | Mount   | Run only once           |
| `useEffect(() => {...}, [data])`              | Update  | Run when `data` changes |
| `useEffect(() => { return () => {...} }, [])` | Unmount | Cleanup stuff           |

---

## 🧬 Lifecycle Flow Summary

### 🧓 Class:

```
Mount → constructor → getDerivedStateFromProps → render → componentDidMount  
Update → getDerivedStateFromProps → shouldComponentUpdate → render → getSnapshotBeforeUpdate → componentDidUpdate  
Unmount → componentWillUnmount
```

### 👶 Function:

```
Mount → useEffect(..., [])
Update → useEffect(..., [deps])
Unmount → useEffect cleanup return function
```

---

## 🔥 Real-Life Example (API Call)

```jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Mounting
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data));

    return () => {
      // Unmounting
      console.log('Component gone 💀');
    };
  }, []); // empty = only run once

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}
```

---

## 💥 TL;DR for Hooks Lovers:

| Phase   | Hook/Method                        | Purpose                      |
| ------- | ---------------------------------- | ---------------------------- |
| Mount   | `useEffect(() => {}, [])`          | API call, setup              |
| Update  | `useEffect(() => {}, [dep])`       | Respond to state/prop change |
| Unmount | `return () => {}` inside useEffect | Cleanup                      |
