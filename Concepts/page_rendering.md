---
### 📄 What is Rendering?

Rendering is how your app's code (HTML, CSS, JS) is turned into **visible content** in the browser. In React, this means converting **React components** into actual **DOM elements** that the browser can display.
---

### 🧠 Types of Rendering in React

React apps can use different types of rendering:

#### 1. **Client-Side Rendering (CSR)**

- React runs in the **browser**.
- The HTML is mostly empty at first.
- React uses JavaScript to generate the DOM after the page loads.
- Common in single-page apps (SPAs).
- ⚠️ Slower initial load, but fast afterward.

#### 2. **Server-Side Rendering (SSR)**

- React runs on the **server** first.
- HTML is generated on the server and sent to the browser.
- Browser loads a fully rendered page.
- Then React takes over (hydration).
- ✅ Faster initial load, better for SEO.

#### 3. **Static Site Generation (SSG)**

- Pages are rendered to HTML **at build time**, not on the fly.
- Very fast because HTML is ready to serve.
- Used in frameworks like **Next.js**.

#### 4. **Incremental/Streaming Rendering**

- Used in advanced setups like React Server Components.
- Parts of the page are rendered and sent as they become ready.

---

### ⚙️ Example of Rendering in React

You write this:

```jsx
function App() {
  return <h1>Hello, React!</h1>;
}
```

React takes that JSX and turns it into:

```html
<h1>Hello, React!</h1>
```

This is the **rendered content** that the browser displays.

---

### ✅ Summary

**Page rendering** in React means taking React components (written in JSX) and turning them into actual content (HTML/DOM) that users see in their browser. It can happen in different places (browser vs server) and at different times (now vs ahead of time), depending on how your app is set up.
