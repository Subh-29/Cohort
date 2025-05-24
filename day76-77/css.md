## 🎨 **Types of CSS in React (Vite Project)**

---

### 🧾 1. **Vanilla CSS (Global CSS)**

#### 📁 How it works:

* You write `.css` files and import them at the top of your component or in `main.jsx`.

```css
/* App.css */
body {
  background-color: #1a1a1a;
  color: white;
}
```

```jsx
import './App.css';
```

#### ✅ Pros:

* Simple, familiar.
* Good for global styles.

#### ❌ Cons:

* No scope; styles can clash.
* No reusability or component encapsulation.

---

### 🧾 2. **CSS Modules (Component-scoped CSS)**

#### 📁 How it works:

* Use `.module.css` extension.
* Styles are scoped automatically to the component.

```css
/* Button.module.css */
.btn {
  color: white;
  background: blue;
}
```

```jsx
import styles from './Button.module.css';

<button className={styles.btn}>Click Me</button>
```

#### ✅ Pros:

* Local scoped → no conflicts.
* Easy to maintain.

#### ❌ Cons:

* No dynamic styles.
* Feels verbose for small styling needs.

---

### 🎨 3. **Tailwind CSS (Utility-first CSS Framework)**

#### 📁 How it works:

* You install Tailwind, then use utility classes in your JSX.

```bash
npm install -D tailwindcss
npx tailwindcss init
```

Update `tailwind.config.js` and `index.css`

```jsx
<button className="bg-blue-500 text-white p-2 rounded">Click</button>
```

#### ✅ Pros:

* No custom CSS files needed.
* Fast to prototype.
* Scales well with big teams.
* Easily customizable.

#### ❌ Cons:

* JSX gets bloated with classes.
* Requires learning the utility class names.

---

### 🧬 4. **Styled-Components (CSS-in-JS)**

#### 📁 How it works:

* You write CSS right inside your JS/JSX using template literals.

```bash
npm install styled-components
```

```jsx
import styled from 'styled-components';

const Button = styled.button`
  background: blue;
  color: white;
  padding: 10px;
`;

<Button>Click</Button>
```

#### ✅ Pros:

* Styles are scoped per component.
* Can use JS logic inside styles.
* Dynamic styling possible.

#### ❌ Cons:

* Slight runtime overhead.
* Not ideal for global styles.

---

### 🧪 5. **Emotion (Another CSS-in-JS)**

Very similar to styled-components but more flexible and customizable.

```bash
npm install @emotion/react @emotion/styled
```

```jsx
/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const Box = styled.div`
  color: red;
  padding: 20px;
`;

<Box>Hello</Box>
```

---

### 🧑‍🎨 6. **Inline Styles**

#### 📁 How it works:

* Pass a JS object directly as a `style` prop.

```jsx
<div style={{ color: "white", backgroundColor: "black" }}>
  Hello World
</div>
```

#### ✅ Pros:

* Super quick.
* Dynamic and can use JS logic directly.

#### ❌ Cons:

* No pseudo-selectors (`:hover`)
* No media queries
* Not reusable

---

### 🧼 7. **SASS / SCSS**

#### 📁 How it works:

* Preprocessor with nesting, variables, mixins etc.

```bash
npm install -D sass
```

```scss
/* styles.scss */
$mainColor: blue;

.container {
  background: $mainColor;

  .child {
    color: white;
  }
}
```

```jsx
import './styles.scss';
```

#### ✅ Pros:

* Cleaner syntax.
* Modular with `@import`.

#### ❌ Cons:

* Extra build step.
* Can overcomplicate things if overused.

---

## 🚀 Which One Should You Use?

| Use Case                     | Recommended CSS Type   |
| ---------------------------- | ---------------------- |
| Quick prototype              | Tailwind CSS / Inline  |
| Large scale app (with team)  | Tailwind + CSS Modules |
| Component-based architecture | Styled-Components      |
| Need nesting, variables      | SCSS                   |
| Keeping it simple            | Vanilla CSS            |

---

## 🧠 TL;DR Summary Table

| Type              | Scoped? | Dynamic?    | Easy? | Notes                           |
| ----------------- | ------- | ----------- | ----- | ------------------------------- |
| Vanilla CSS       | ❌       | ❌           | ✅     | Use for basic global stuff      |
| CSS Modules       | ✅       | ❌           | ✅     | Component-based, cleaner        |
| Tailwind          | ✅       | ✅ (utility) | ⚠️    | Powerful, but classy chaos      |
| Styled-Components | ✅       | ✅           | ⚠️    | JS power in your styles         |
| Emotion           | ✅       | ✅           | ⚠️    | Styled-components with steroids |
| Inline styles     | ✅       | ✅           | ✅     | Use for quick fixes only        |
| SASS / SCSS       | ❌       | ❌           | ✅     | Nesting heaven, variables rock  |
