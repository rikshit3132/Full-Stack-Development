# What is Non-Blocking I/O in Node.js?
- Non-blocking = don’t wait, move ahead
- I/O = Input / Output operations
   - Reading files
   - Database calls
   - API requests
- Full Meaning
  - Non-blocking I/O = Node.js does NOT wait for tasks like file reading or API calls to finish before moving to the next line

- Example (Very Important)
```javascript
const fs = require('fs');
fs.readFile('file.txt', (err, data) => {
  console.log("File read done");
});

console.log("Next line executed");

```
 Output:
Next line executed
File read done

# Why this happens?
Because:
  - File reading takes time 
- Node says:
  - “I’ll handle it later, you continue”
  - How it Works Internally

- Node.js:
  - Sends I/O task (file, DB, API) to system
  - Keeps executing next code
  - When task finishes → event comes
  - Callback runs
-This is powered by:
  - Event loop
  - Event-driven system
- Real-Life Analogy
Imagine:
  - You order food 
  - Instead of waiting at counter…
  - You go sit and chat

- When food is ready → they call you

- That’s non-blocking

# Blocking vs Non-Blocking
- Blocking (Traditional)
```javascript
readFileSync('file.txt');
console.log("Next");
```
 Output:
(wait...)
Next
It waits → slow

- Non-Blocking (Node.js)
```javascript
readFile('file.txt', callback);
console.log("Next");
```

Output:
Next
(wait...)
callback runs
It doesn’t wait → fast