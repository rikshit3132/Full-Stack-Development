## What is a Server?
- A server is just a computer (or program) that provides services/data to other computers (clients) over a network.
- In simple words:
  - Server = gives data
  - Client = asks for data
# Example
- When you open a website:

  - Browser (client) → sends request
  - Server → sends response (HTML, CSS, data)
- Example:
 - You open YouTube
 - YouTube server sends videos to you

# In Node.js (Server Creation)
You can create a server like this:
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello World');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
```
- Now your computer becomes a server

