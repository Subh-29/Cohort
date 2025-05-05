# 🔥 Async JavaScript - Full Mastery Notes

---

## 📘 What is Asynchronous JavaScript?

JavaScript is a **single-threaded** programming language, meaning it can execute one command at a time. If you perform a long task (like fetching data from a server), it'll **block everything else** unless it's done asynchronously.

So, async JS allows us to perform **non-blocking** operations by:

* **Delegating long-running tasks** to browser APIs or Node APIs
* **Getting notified** when the operation is done

---

## 🧱 JavaScript Execution Model

### 🔁 Call Stack

* It's like a stack of dishes. Last-in, first-out (LIFO).
* Each function call gets pushed to the stack.
* Once executed, it's popped off the stack.

```js
function greet() {
  console.log("Hello");
}

function welcome() {
  greet();
  console.log("Welcome!");
}

welcome();
```

**Call Stack Sequence:**

1. `welcome()` → pushed
2. `greet()` → pushed
3. `console.log("Hello")` → run
4. `greet()` → popped
5. `console.log("Welcome!")` → run
6. `welcome()` → popped

---

## 🧵 Blocking vs Non-Blocking

### Blocking (Synchronous)

```js
const data = fetchData(); // waits here
console.log("Data:", data); // waits till fetchData completes
```

### Non-blocking (Asynchronous)

```js
fetchData((data) => {
  console.log("Data:", data);
});
console.log("I run before data comes!");
```

---

## 🧨 Callback Functions

A **callback** is a function passed as an argument to another function, which is then invoked inside the outer function.

### Basic Example

```js
function greet(name, callback) {
  console.log("Hi", name);
  callback();
}

function sayBye() {
  console.log("Bye!");
}

greet("Subh", sayBye);
```

### Nested Callbacks (aka Callback Hell)

```js
getUser(function(user) {
  getOrders(user, function(orders) {
    getShipping(orders, function(shipping) {
      console.log("Shipping:", shipping);
    });
  });
});
```

😵 Too many levels = hard to debug, test, and maintain

---

## 🛠️ Promises

### What is a Promise?

A **Promise** is an object representing the eventual **completion or failure** of an asynchronous operation.

### States of a Promise:

* **Pending**
* **Fulfilled**
* **Rejected**

### Creating a Promise

```js
const promise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Done!");
  } else {
    reject("Failed!");
  }
});

promise
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

---

## ⛓️ Promise Chaining

```js
function step1(val) {
  return Promise.resolve(val + 1);
}
function step2(val) {
  return Promise.resolve(val * 2);
}

step1(1)
  .then(step2)
  .then(console.log); // 4
```

---

## ⚡ Async / Await (ES8+)

### How it Works

* `async` makes a function return a **Promise**
* `await` pauses function execution until the Promise resolves

```js
async function fetchData() {
  try {
    const res = await fetch("https://api.example.com");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

---

## 🌀 Event Loop

### What is the Event Loop?

The Event Loop is what makes async JavaScript work. It continuously checks if the call stack is empty and if there's any code in the task queues that can be pushed into the stack.

### Components of the Event Loop:

#### 1. **Call Stack**

* It’s where your code actually runs.
* JS is single-threaded; only one task at a time is executed here.
* Any function call gets pushed here and popped after execution.

#### 2. **Web APIs**

* Provided by the browser (or Node APIs in backend).
* Handles async things like:

  * DOM events
  * `setTimeout`, `setInterval`
  * `fetch`
  * Geolocation, etc.
* After they finish, they push callbacks to queues.

#### 3. **Callback Queue (aka Task Queue or Macrotask Queue)**

* Contains tasks like `setTimeout`, `setInterval`, `DOM events`
* These are handled after the call stack is empty

#### 4. **Microtask Queue**

* Higher priority than the callback queue
* Includes:

  * `Promise.then()` callbacks
  * `MutationObserver`
* Runs **before** callback queue every time the stack is empty

#### 5. **Event Loop (Itself)**

* Infinite while loop that:

  1. Checks if call stack is empty
  2. First executes all microtasks
  3. Then picks from callback queue

### Visual Example:

```js
console.log("Start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```

**Output:**

```
Start
End
Promise
setTimeout
```

**Why?**

* `console.log("Start")` → runs
* `setTimeout()` → goes to Web API → callback queue
* `Promise.then()` → microtask queue
* `console.log("End")` → runs
* Call stack is empty → Event loop checks microtasks → runs `Promise`
* Then runs macrotask `setTimeout`

---

## 🔄 setTimeout vs Promises

```js
console.log("Start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```

**Output:**

```
Start
End
Promise
setTimeout
```

Why? Promises go in **Microtask Queue** (higher priority than Callback Queue)

---

## 🪜 Microtasks vs Macrotasks

| Task Type | Example            | Queue           |
| --------- | ------------------ | --------------- |
| Microtask | `.then()`, `await` | Microtask queue |
| Macrotask | `setTimeout()`     | Callback queue  |

---

## 💥 Common Mistakes

### ❌ Mixing `then()` and `await`

```js
async function broken() {
  fetch("...").then(res => {
    const data = await res.json(); // ❌ Can't use await here
  });
}
```

### ✅ Fix:

```js
async function fixed() {
  const res = await fetch("...");
  const data = await res.json();
}
```

---

## 🧪 Example: Chained API Calls

```js
async function getFullData() {
  const user = await fetchUser();
  const orders = await fetchOrders(user.id);
  const shipment = await fetchShipping(orders);
  console.log(shipment);
}
```

---

## 🚀 Bonus: Promise.all()

Executes all promises **in parallel** and waits for all to resolve.

```js
async function getData() {
  const [user, posts] = await Promise.all([
    fetch("/user").then(res => res.json()),
    fetch("/posts").then(res => res.json())
  ]);
  console.log(user, posts);
}
```

---

## 🤹 Summary Table

| Concept     | Description                        | Syntax                |
| ----------- | ---------------------------------- | --------------------- |
| Callback    | Function called after task is done | `fn(() => {})`        |
| Promise     | Future value container             | `.then().catch()`     |
| Async/Await | Cleaner Promise handling           | `async/await`         |
| Event Loop  | Handles async flow                 | `Call stack + queues` |

---

## 📘 Final Quiz

1. What’s the difference between microtask & callback queue?
2. Why does `Promise` resolve before `setTimeout`?
3. Convert callback hell into Promise chain.
4. What happens if you `await` in a non-async function?
5. Use `Promise.all()` to fetch 3 APIs in parallel.

---

## 🧪 Mini Project Ideas (Practice)

1. **To-Do App** with async save (fake delay with setTimeout)
2. **Weather App** using `fetch()` and `await`
3. **File Uploader** with progress bar and async simulation
4. **GitHub User Info**: Enter username, fetch profile

---

## 🔚 TL;DR

* JavaScript is single-threaded and async is achieved via **callbacks**, **promises**, and **async/await**.
* **Event Loop** coordinates all async code.
* Use `async/await` for clean and readable code.
* Don’t mix `then()` and `await`.
* Learn by building mini projects.

Peace out ✌️ and keep coding like a beast 🧠💻
