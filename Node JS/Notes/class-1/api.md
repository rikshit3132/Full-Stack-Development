# API ?
- An API (Application Programming Interface) is a way for two software systems to communicate with each other.

# Simple analogy 
- Think of an API like a waiter in a restaurant:
- You (client) give your order to the waiter (API)
- The waiter takes it to the kitchen (server)
- The kitchen prepares the food
- The waiter brings the response back to you
  - You never go into the kitchen directly — the API handles everything.

# In technical terms 
- An API is a set of rules and endpoints that allow:
 - One application to request data or services
 - Another application to respond with data

# Real example 
- When you use:
  - Instagram
  - Google Maps
- These apps use APIs to:
  - Fetch user data
  - Load maps
  - Send messages

# Example in Node.js (very basic)
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/api') {
    res.write(JSON.stringify({ message: "Hello API" }));
    res.end();
  }
});

server.listen(3000);
```
- If you go to:
  - http://localhost:3000/api
  - You are calling an API endpoint, and it returns data.