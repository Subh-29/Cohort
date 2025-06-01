## 🧠 **What the hell is an API Call?**

**API (Application Programming Interface)** is like a waiter between your app and the backend/server.
An **API call** is basically your app shouting:

> “Hey server! Gimme the data I want!”
> And the server responds:
> “Sure, here you go!” (or sometimes “Nah, 404 bro!” 😢)

---

## 🔄 **Types of API Calls** (HTTP methods):

* **GET** → Fetch data
* **POST** → Send data
* **PUT/PATCH** → Update data
* **DELETE** → Remove data

---

# 🚀 1. **AJAX (Asynchronous JavaScript and XML)**

### ⚙️ How it works?

Old-school but solid. AJAX uses the `XMLHttpRequest` object to talk to APIs without refreshing the page.

### 💻 Example: AJAX GET

```js
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

xhr.onload = function () {
    if (xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText)); // Success
    } else {
        console.error('Error:', xhr.status);
    }
};

xhr.onerror = function () {
    console.error('Request error...');
};

xhr.send();
```

### 🔥 Pros:

* Works in old browsers (IE gang rise 😤)
* Low-level control

### 💩 Cons:

* Verbose AF
* Callback hell 🔥🔥🔥

---

# ⚡ 2. **Fetch API (Modern)**

### 🧠 What is it?

Fetch is modern, promise-based, and neat. It returns a `Promise` and is much cleaner than AJAX.

### 💻 Example: Fetch GET

```js
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        if (!response.ok) throw new Error('Network response was not OK');
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
```

### 💻 Example: Fetch POST

```js
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        title: 'Foo',
        body: 'Bar',
        userId: 1
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

### 🔥 Pros:

* Cleaner syntax
* Promise-based
* Native browser support (modern browsers)

### 💩 Cons:

* No built-in timeout or request canceling (use AbortController)
* Error handling is manual

---

# ⚔️ 3. **Axios (King of Simplicity)**

### 🧠 What is it?

Axios is a third-party promise-based HTTP client. Works in both browser & Node.js. Super clean.

```bash
npm install axios
```

### 💻 Example: Axios GET

```js
axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => console.log(response.data))
    .catch(error => console.error(error));
```

### 💻 Example: Axios POST

```js
axios.post('https://jsonplaceholder.typicode.com/posts', {
    title: 'Foo',
    body: 'Bar',
    userId: 1
})
.then(response => console.log(response.data))
.catch(error => console.error(error));
```

### ✅ Extra Sauce:

* **Automatic JSON parsing**
* **Better error handling**
* **Supports request canceling, timeout, interceptors**

---

## ⚙️ How to Integrate API with Frontend?

Let’s say you have a button on your HTML page that fetches user data:

### 🧩 HTML

```html
<button id="loadData">Load Users</button>
<div id="output"></div>
```

### 🤖 Using Fetch

```js
document.getElementById('loadData').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            document.getElementById('output').innerHTML = 
                data.map(user => `<p>${user.name}</p>`).join('');
        })
        .catch(err => console.error(err));
});
```

### 🤖 Using Axios

```js
document.getElementById('loadData').addEventListener('click', () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            document.getElementById('output').innerHTML = 
                res.data.map(user => `<p>${user.name}</p>`).join('');
        })
        .catch(err => console.error(err));
});
```

---

## 🥊 Comparison Table

| Feature          | AJAX            | Fetch API       | Axios               |
| ---------------- | --------------- | --------------- | ------------------- |
| Native Support   | ✅               | ✅ (Modern)      | ❌ (Need to install) |
| Syntax           | Verbose         | Clean (Promise) | Super clean         |
| Timeout          | Manual          | ❌               | ✅                   |
| Interceptors     | ❌               | ❌               | ✅                   |
| Response Parsing | Manual          | Manual          | Auto                |
| File Uploads     | 😐              | 😐              | ✅                   |
| Browser Support  | Great (Old too) | Modern Browsers | Great               |

---

## 🔚 TL;DR (If you're lazy like me sometimes):

* **Just starting?** → Use `Fetch` (simple and native)
* **Need full control / interceptors / cancel requests?** → Use `Axios`
* **Working with old legacy code or IE?** → AJAX