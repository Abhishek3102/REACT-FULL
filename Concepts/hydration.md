---

## 💧 What is **Hydration** in React?

**Hydration** is the process of attaching React's event listeners and internal state to **server-rendered HTML** on the client side.

### 🧠 Why is it needed?

When using **Server-Side Rendering (SSR)** (like in **Next.js**), the server sends fully-rendered HTML to the browser to speed up initial page load and help with SEO.

But that HTML is just **static** – there's no interactivity (clicks, state updates, etc.). So when the page loads:

👉 React **"hydrates"** the static HTML by:

- Parsing it
- Attaching JavaScript logic
- Making it interactive (hooks, state, events start working)

---

### 💥 What is a **Hydration Error**?

A **hydration error** happens when the HTML generated **on the server** does **not match** what React **expects on the client**.

React compares the static HTML (from the server) with the version it tries to generate on the client. If there's a mismatch, you'll see a warning like:

```
Warning: Text content did not match. Server: "Hello" Client: "Hi"
```

---

### ⚠️ Common Causes of Hydration Errors:

1. **Non-deterministic rendering**

   - Random values in render (e.g. `Math.random()`, `Date.now()`)
   - These are different between server and client.

2. **State-dependent rendering**

   - Using state or effects that only run on the client to change the initial content.

3. **Browser-only APIs** used during render

   - Accessing `window`, `localStorage`, etc. in server-rendered components.

4. **Asynchronous data loading** without proper synchronization

   - Server loads one thing, client fetches and replaces it, leading to mismatch.

---

### ✅ How to Fix Hydration Errors:

- Use `useEffect` for browser-only logic (it runs only on the client).
- Use `useState` with care — avoid initial state that depends on `window` or randomness unless you guard it.
- In Next.js or other SSR frameworks:

  - Use `dynamic(import(...), { ssr: false })` for client-only components.
  - Use `useClient` or conditional logic (`typeof window !== 'undefined'`) for client-specific rendering.

---

### 🧪 Example:

```jsx
function Greeting() {
  return <p>{Math.random()}</p>; // ❌ causes hydration error
}
```

- Server renders one random number.
- Client renders a different one → React warns of mismatch.

✅ Fix:

```jsx
function Greeting() {
  const [num, setNum] = useState(null);

  useEffect(() => {
    setNum(Math.random());
  }, []);

  return <p>{num !== null ? num : "Loading..."}</p>;
}
```

Now React renders `'Loading...'` on the server and updates on the client — **no mismatch**.

---

### 🔁 Summary:

| Term            | Meaning                                                        |
| --------------- | -------------------------------------------------------------- |
| Hydration       | React attaching logic to static HTML rendered by the server    |
| Hydration Error | A mismatch between server-rendered and client-rendered content |
