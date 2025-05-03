
# 🍪 Ultimate Guide to Cookies in JavaScript

---

## 🧠 What Are Cookies?

Cookies are **small pieces of data** (max \~4KB per cookie) stored on the user's browser. They're commonly used to:

* Maintain sessions (logins)
* Remember preferences
* Track user behavior (👀 analytics & ads)
* Persist small info between visits

Unlike `localStorage` or `sessionStorage`, **cookies are sent to the server with every HTTP request**.

---

## 🔧 Cookie Basics

### ✅ Set a Cookie

```js
document.cookie = "username=TonyStark";
```

### ✅ Get All Cookies

```js
console.log(document.cookie); 
// "username=TonyStark; theme=dark"
```

### ❌ Overwrites Only by Key

If you set the same key again:

```js
document.cookie = "username=BruceWayne";
```

The `username` cookie gets replaced.

---

## 🛠 Advanced Cookie Format

```js
document.cookie = "key=value; expires=DATE; path=/; domain=example.com; Secure; SameSite=Strict";
```

| Option     | Description                                                  |
| ---------- | ------------------------------------------------------------ |
| `expires`  | Date after which cookie is deleted (UTC format)              |
| `path`     | URL path that the cookie is valid for (`/` = entire site)    |
| `domain`   | Which domain/subdomain has access                            |
| `Secure`   | Only send cookie over HTTPS                                  |
| `HttpOnly` | Not accessible via JavaScript (set by server only)           |
| `SameSite` | Controls cross-site cookie sending (`Strict`, `Lax`, `None`) |

---

## ✍️ Custom JS Functions for Cookie Handling

```js
// ✅ Set a cookie
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 86400000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// ✅ Get a cookie
function getCookie(name) {
  let nameEQ = name + "=";
  let cookiesArr = document.cookie.split(';');
  for (let c of cookiesArr) {
    while (c.charAt(0) === ' ') c = c.substring(1);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
  }
  return null;
}

// ✅ Delete a cookie
function deleteCookie(name) {
  document.cookie = name + "=; Max-Age=0; path=/";
}
```

---

## 💡 Real-World Examples

### 1️⃣ Welcome Message (Only for First-Time Visitors)

```js
if (!getCookie("visited")) {
  alert("Welcome new user!");
  setCookie("visited", "true", 7); // 7 days
} else {
  console.log("Returning user");
}
```

---

### 2️⃣ Save Theme Preference

```js
// Set cookie on user theme change
function toggleTheme(theme) {
  setCookie("theme", theme, 30);
  document.body.className = theme;
}

// Apply theme on page load
window.onload = () => {
  const savedTheme = getCookie("theme");
  if (savedTheme) {
    document.body.className = savedTheme;
  }
};
```

---

### 3️⃣ Auto-Fill Form Using Cookies

```html
<input type="text" id="username" placeholder="Your Name" />
```

```js
let input = document.getElementById("username");

window.onload = () => {
  input.value = getCookie("name") || "";
};

input.addEventListener("blur", () => {
  setCookie("name", input.value, 5);
});
```

---

## 🧨 Cookie Pitfalls

### ❌ 1. Limited Size

* Max 4KB per cookie.
* Browsers usually allow only 20–50 cookies per domain.

### ❌ 2. Plaintext = Not Secure

* Anyone can read cookies in DevTools.
* Don’t store passwords, tokens, or secret keys in cookies via JS.

### ❌ 3. Not Ideal for Large/Structured Data

* If you need objects or large data, use `localStorage` or `IndexedDB`.

---

## ⚔️ Cookies vs `localStorage` vs `sessionStorage`

| Feature            | `Cookies`            | `localStorage`      | `sessionStorage`    |
| ------------------ | -------------------- | ------------------- | ------------------- |
| Max Size           | \~4KB                | \~5–10MB            | \~5MB               |
| Sent to Server     | ✅ Yes                | ❌ No                | ❌ No                |
| Accessible via JS  | ✅ (unless HttpOnly)  | ✅                   | ✅                   |
| Expiration Control | ✅ Yes (`expires`)    | ❌ Manual clear only | ✅ Auto on tab close |
| Use Cases          | Auth, login sessions | Preferences, themes | Temporary drafts    |

---

## 🔐 Cookie Security Tips

### ✅ Use `Secure` + `SameSite` flags

```js
document.cookie = "key=value; Secure; SameSite=Strict";
```

### ✅ Server-side Auth Cookies? Use `HttpOnly`

* Prevents access via JS (protects from XSS).
* Can only be set via server headers.

```http
Set-Cookie: token=abc123; HttpOnly; Secure; SameSite=Strict
```

---

## 🧪 Bonus: Set Cookie via Response Headers (Server-Side)

```http
HTTP/1.1 200 OK
Set-Cookie: userId=123; Expires=Wed, 21 Oct 2025 07:28:00 GMT; Path=/; Secure; HttpOnly
```

---

## 🧼 Best Practices

* Avoid storing sensitive info on the client
* Don’t use cookies for large JSON blobs
* Use unique cookie names to prevent clashes
* Use `path` and `SameSite` smartly for access control
* Always set an `expires` or `Max-Age` when using JS

---

## 🛑 When NOT to Use Cookies

* Large data (use `localStorage`)
* Storing access tokens (unsafe unless HttpOnly via server)
* App state or UI data (prefer `localStorage` or React/Vue state management)

---

## ✅ Quick Cheatsheet

```js
setCookie("key", "value", 7);
getCookie("key");
deleteCookie("key");
```

---
