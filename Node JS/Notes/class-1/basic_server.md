## Basic Server using Node.js
# Step 1: Import HTTP module
```javascript
const http = require('http');
```

# Step 2: Create Server
```javascript
const server = http.createServer((req, res) => {
  res.end('Hello from Node.js Server!');
});
```
- req → incoming request
- res → response you send

# Step 3: Start Server
```javascript
server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

## Defining Routes

```javascript
const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end("Home Page");
    }else if(req.url === '/about'){
        res.end("About Page");
    }else{
        res.end("Error 404 not found")
    }
})

server.listen(port,host,() => {
    console.log(`server is running on http://${host}:${port}`)
})

```

# Limitation of Plain Node.js
- Routing is manual 
- Middleware handling is hard
- Code becomes messy for big apps
  - That’s why we use Express.js later