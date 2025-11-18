### C. Objects & basic algorithms

11. **Count frequency of characters**  
    `charFrequency(str)` → returns object.  
    Example: `"banana"` → `{ b:1, a:3, n:2 }`
    
12. **Convert array of objects to map by ID**
    

```js
const users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Sara" },
];
```

`toMap(users)` →  
`{ 1: {…}, 2: {…} }`

13. **Find user by name**  
    `findUserByName(users, name)` → returns object or `null`.
    
14. **Merge two objects** (without using `{...a, ...b}` the first time)  
    `merge(obj1, obj2)` → new object with properties from both.
    
15. **Check if two strings are anagrams**  
    `"listen"` and `"silent"` → true  
    `"rat"` and `"car"` → false
    