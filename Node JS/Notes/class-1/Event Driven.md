## What is “Event-Driven” in Node.js?
- Event-driven = code runs when something happens (an event occurs).
- Instead of running step-by-step continuously, Node.js:
  - waits for events.
  - reacts when they happen.

# What is an “Event”?
- An event = something that happens in your app
   - User clicks a button
   - API request comes
   - File finishes reading
   - Timer completes
  
# How Node.js Handles Events?
- Node.js uses:
 - Event loop
 - Callbacks (or promises/async-await)
- Flow:
1. Event happens (e.g., user request)
2. Node registers it
3. When ready → executes the function (callback)

# Real-Life Analogy?
- Imagine a restaurant waiter:
   - Waiter doesn’t cook food
   - Takes multiple orders
   - When food is ready → serves it
- Node.js works same:
   - Takes many requests
   - Handles them when ready
   - Doesn’t block

# Simple Code Example

```javascript
const fs = require('fs');

fs.readFile('file.txt', (err, data) => {
  console.log("File read completed!");
});

console.log("This runs first!");

```

Output:
This runs first!
File read completed!

- File reading = event
- Node doesn’t wait → continues execution
- When done → triggers callback

# Event-Driven vs Traditional (Blocking) ?
- Traditional (Blocking)
  - Waits for task to finish
  - Slow for multiple users
-Node.js (Event-Driven)
  - Doesn’t wait
  - Handles multiple tasks together

# Why This Matters?

Because of event-driven nature, Node.js is:
- Fast
- Scalable 
- Perfect for:
  - APIs
  - Real-time apps (chat, notifications)
  
- Event-driven = “Do something when an event happens, not before”