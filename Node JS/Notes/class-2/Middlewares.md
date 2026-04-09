# What is Middleware?
- In Express.js, middleware is a function that runs between request and response.

# Flow:
- Request → Middleware → Middleware → Route → Response
- Syntax:
```javascript
(req, res, next) => {
    // logic
    next(); // pass control to next middleware
}
```
# Why Middleware is Needed?
Middleware is used to:

- Modify request (req)
- Modify response (res)
- Run logic before sending response
- Authentication / Authorization
- Logging
- Error handling

- Without middleware, your code becomes messy and repetitive.

# Types of Middleware in Express?

1. Application-Level Middleware
- Applied to the whole app using app.use()
```javascript
app.use((req, res, next) => {
    console.log("App-level middleware");
    next();
});
```
- Runs for every request

2. Router-Level Middleware
- Applied to a specific router using router.use()

```javascript
const router = express.Router();
router.use((req, res, next) => {
    console.log("Router middleware");
    next();
});
```
- Runs only for that specific route group

3. Custom Middleware
- Middleware you create yourself
```javascript
const myMiddleware = (req, res, next) => {
    console.log("Custom middleware");
    next();
};
app.use(myMiddleware);
```
- Used for:
  - Auth checks
  - Logging
  - Validation

4. Built-in Middleware
- Provided by Express itself
- Examples:
```javascript
app.use(express.json());       // parse JSON
app.use(express.urlencoded()); // parse form data
app.use(express.static("public")); // serve static files
```
- No need to install anything

5. Third-Party Middleware
- Installed via npm
- Popular ones:
  - cors → handle cross-origin requests
  - morgan → logging
  - body-parser → parse body (older)
- Example:
  - const cors = require("cors");
  - app.use(cors());

# Error Handling Middleware
- Special middleware to handle errors
- Syntax (IMPORTANT):
```javascript
(err, req, res, next) => {
    res.status(500).send("Something went wrong");
}
```
- Notice: 4 parameters → this makes it an error middleware
- Example:
```javascript
app.get('/', (req, res) => {
    throw new Error("Error occurred!");
});
app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(500).send("Internal Server Error");
});
```

# Key Points 
- Middleware runs in order
- Always call next() (unless sending response)
- Can stop request-response cycle
- Error middleware must be last

# Middleware = security checkpoints

- User → Security Check → ID Check → Route → Response