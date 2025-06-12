**Build a mini version of React** (not as powerful as the original) to understand:

- How React works under the hood.
- JSX to JS compilation.
- How DOM manipulation and rendering work.
- React’s internal `createElement` mechanism.
- Expression evaluation in JSX.

---

## 🛠️ Part 1: Project Setup

### Step 1: Create Basic Structure

Create a folder called `custom-react`.

**HTML (index.html):**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Custom React</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="customReact.js"></script>
  </body>
</html>
```

---

## 🧠 Part 2: Core Concepts Behind React

React creates a **tree of elements** using the `createElement` method and **renders it into the DOM**. You’ll simulate this.

---

## 🔧 Part 3: Building a Custom `createElement` and `render` Function

### Basic Custom React Element:

```js
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit Google",
};
```

---

### Render Logic:

```js
function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);

  for (let prop in reactElement.props) {
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  domElement.innerHTML = reactElement.children;
  container.appendChild(domElement);
}
```

### Usage:

```js
const mainContainer = document.querySelector("#root");
customRender(reactElement, mainContainer);
```

---

## 🔁 Improvement: Modular and Scalable Render Function

Instead of hardcoding `href`, `target`, etc., use a loop for `props`.

```js
function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);

  const props = reactElement.props || {};
  for (let key in props) {
    if (key === "children") continue;
    domElement.setAttribute(key, props[key]);
  }

  domElement.innerHTML = reactElement.children || "";
  container.appendChild(domElement);
}
```

---

## 🧬 React.createElement Simulation

### JSX:

```jsx
<a href="https://google.com" target="_blank">
  Click me
</a>
```

### Transpiled Version:

```js
React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Click me"
);
```

So in your custom React:

```js
function createElement(type, props, ...children) {
  return {
    type,
    props,
    children: children.length === 1 ? children[0] : children,
  };
}
```

---

## ⚡ Adding JavaScript Expressions (Evaluated Expressions)

### In JSX:

```jsx
<h1>{username}</h1>
```

In plain JS, that is equivalent to:

```js
const username = "Chai and Code";
const element = {
  type: "h1",
  props: {},
  children: username, // evaluated
};
```

---

## 📦 JSX to JS (JSX Parsing)

JSX is just syntactic sugar; it’s converted into:

```js
React.createElement("h1", null, "Hello");
```

To process JSX, tools like:

- **Babel**
- **Vite**
- **Webpack** + Babel

are used.

---

## 📚 Behind the Scenes of React

React's source code:

- Is **open source**.
- Has internal folders like `/packages/react` and `/packages/react-dom`.

For example:

- `React.createElement` expects:

  ```js
  {
    type: 'div',
    key: null,
    ref: null,
    props: { ... }
  }
  ```

React has advanced features like:

- Virtual DOM.
- Fiber architecture for reconciliation.
- Batching and prioritization.
- Synthetic events.

---

## 🧪 Experimentation: Use JSX in Vite

You can validate your understanding by:

1. Setting up a `vite` project.
2. Writing JSX.
3. Understanding how it transpiles using Babel behind the scenes.

---

## 💡 Debugging Insights from the Video

- If you pass wrong property names or incorrectly structure the element object, rendering fails.
- React expects `type`, `props`, `children` keys.
- `children` must be string/text node or array of such nodes.
- Debug using browser's **devtools console** and **Elements tab**.

---

## 🔍 Final Summary

| Step | Concept                                                       |
| ---- | ------------------------------------------------------------- |
| 1    | Setup `index.html` and basic JS                               |
| 2    | Understand `type`, `props`, `children` structure              |
| 3    | Build custom `render()` and `createElement()`                 |
| 4    | Loop through props to set attributes                          |
| 5    | Handle JSX expressions (evaluate variables)                   |
| 6    | Learn how Babel and Vite transpile JSX                        |
| 7    | Compare your version with `React.createElement`               |
| 8    | Look into React source code for deeper understanding          |
| 9    | Understand expressions in JSX are **evaluated**, not executed |
| 10   | Debug effectively by analyzing object structures              |

---

## 🔥 1. **JSX Transformation (JSX ➝ React.createElement)**

### ❓ What is JSX?

**JSX (JavaScript XML)** is a syntax extension for JavaScript used in React. It allows you to write HTML-like code inside JavaScript.

### ✅ JSX Example:

```jsx
<h1>Hello, {userName}</h1>
```

This is **not valid JavaScript**. Browsers can’t understand it directly.

---

### 🔁 How JSX is Transformed

JSX is transpiled by **Babel** into `React.createElement(...)`.

### Transpiled Code:

```js
React.createElement("h1", null, "Hello, ", userName);
```

Each JSX element becomes a call to:

```js
React.createElement(type, props, ...children);
```

---

### 🧠 Why JSX?

- **Cleaner syntax** than `React.createElement(...)`.
- Mixes HTML and JavaScript naturally.
- Helps you visualize the DOM structure.

---

## ⚙️ Babel

### 🔍 What is Babel?

**Babel** is a JavaScript compiler that converts modern JavaScript (ES6+) and JSX into plain JavaScript that all browsers can understand.

### 🔧 Babel in React

JSX ➝ Babel ➝ `React.createElement(...)` ➝ Vanilla JS

### Key Babel Plugins:

- `@babel/preset-react` → JSX transformation
- `@babel/preset-env` → Converts ES6+ features

---

### ✅ Sample Babel Transformation:

```jsx
const element = (
  <a href="https://google.com" target="_blank">
    Click me
  </a>
);
```

Transpiles to:

```js
const element = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Click me"
);
```

You can try this at 👉 [https://babeljs.io/repl](https://babeljs.io/repl)

---

## 🧬 2. **React Fiber Architecture**

### 🚀 What is Fiber?

Fiber is the **reconciliation algorithm** and **rendering engine** in React (introduced in React 16).

---

### 🧠 Why Fiber?

Before Fiber, React’s reconciliation (diffing & DOM updating) was **synchronous** — it couldn’t be paused or split.

Fiber enables:

- **Asynchronous rendering**
- **Time slicing**
- **Prioritization of updates**
- **Error handling improvements**

---

### 🔍 What Fiber Actually Does

- React builds a **Fiber tree** (similar to Virtual DOM).
- Each Fiber is a **JS object** representing a DOM node/component.
- React walks this tree in a way that allows:

  - Pausing
  - Aborting
  - Reusing
  - Prioritizing updates

---

### 🧱 Structure of a Fiber Node

```js
{
  type: "div",
  key: null,
  child: {...},
  sibling: {...},
  return: parentNode,
  stateNode: actualDOMNode,
  effectTag: "PLACEMENT" | "UPDATE" | "DELETION",
}
```

---

### 🌳 Process Overview

1. **Render Phase (Build Fiber Tree):**
   → Creates a tree of Fiber nodes.

2. **Commit Phase (Apply to DOM):**
   → Applies changes (insert/update/delete) to the actual DOM.

---

### 🤯 Fiber Benefits

- Fine-grained control over rendering.
- Better performance for large trees.
- Enables features like:

  - **Concurrent Mode**
  - **Suspense**
  - **React Streaming**

---

## 🧩 3. createElement vs JSX vs Fiber Recap

| Concept               | Purpose                                          | Example                                       |
| --------------------- | ------------------------------------------------ | --------------------------------------------- |
| `JSX`                 | Developer-friendly HTML-like syntax              | `<h1>Hi</h1>`                                 |
| `React.createElement` | Programmatic object representation of JSX        | `React.createElement('h1', null, 'Hi')`       |
| `Fiber`               | Internal data structure and engine for rendering | `{ type: 'h1', props: {}, child: null, ... }` |

---

## 🧠 Visual Summary

```
Your JSX
   ↓
Babel transforms JSX → React.createElement()
   ↓
React builds Fiber tree using createElement data
   ↓
Fiber diffing engine compares old vs. new tree
   ↓
DOM updates applied based on diffing result
```

---

## 📚 Suggested Further Reading

| Topic               | Resource                                                                                                                                                |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| JSX ↔ createElement | [JSX In Depth - React Docs](https://react.dev/learn/writing-markup-with-jsx)                                                                            |
| Babel               | [Babel Handbook](https://github.com/jamiebuilds/babel-handbook)                                                                                         |
| Fiber               | [React Fiber Architecture Explained](https://indepth.dev/posts/1008/the-how-and-why-on-reacts-usage-of-linked-list-in-fiber-to-walk-the-component-tree) |
| React Source Code   | [React GitHub](https://github.com/facebook/react)                                                                                                       |
