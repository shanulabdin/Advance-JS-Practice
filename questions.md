### A. Basic fetch with promises

19. Write a function `getPosts()` that:
- uses `fetch`
- logs the list of posts (first 10 only)
- handles errors with `.catch`

### B. Convert to async/await

20. Rewrite `getPosts()` like this:
    

```js
async function getPosts() {
  // use try/catch
}
```

Use `await fetch()` and `await response.json()`.

---

### C. Show API data in the DOM

21. On a button click:

- Fetch posts
- Show title + body in the page (e.g., in cards or list items)

Bonus:
- Show a “Loading…” text while fetching.
- Hide “Loading…” when done.
- If error happens, show “Something went wrong”.
