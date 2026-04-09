# Why Middleware Comes Before Routes?
- Because middleware is used to process / prepare / validate the request before your route logic runs.
- Think of it like a filter pipeline.
- Flow Explanation
  - Request → Middleware → Middleware → Route → Response
- Step-by-step:
  - Request comes in
  - Middleware runs:
    - Check auth 
    - Parse JSON 
    - Log request 
    - If everything is OK → next()
    - Then route handler runs
    - Response is sent
  
# What happens if middleware is AFTER routes?
```javascript
app.get('/', (req, res) => {
    res.send("Home");
});

app.use((req, res, next) => {
    console.log("Middleware");
    next();
});
```
- Output:
  - Route runs FIRST
  - Response is sent
  - Middleware may NEVER run 
-  Because response already ended.

- Real Example (Important)
  - Authentication Middleware
```javascript
const auth = (req, res, next) => {
    if (!req.headers.token) {
        return res.send("Unauthorized");
    }
    next();
};

app.use(auth); // BEFORE routes

app.get('/dashboard', (req, res) => {
    res.send("Welcome");
});
```
- Flow:
    - Request → auth middleware checks token
    - If valid → go to route
    - If not → stop request
 
# Why This Design?
- Because middleware handles:
  - Validation (is data correct?)
  - Authentication (is user allowed?)
  - Parsing (convert JSON → JS object)
  -  Logging
- Routes should only focus on:
    - “What response to send”

# Simple Analogy
- Airport security 
  - Passenger → Security Check → Passport Check → Boarding Gate
  - Middleware = security checks
  - Route = boarding gate
- You can’t board first and then check passport 

# Key Rule

-  Order matters in Express.js
```javascript
app.use(middleware); // runs first
app.get('/', handler); // runs after
```

# One-Line Summary
- Middleware comes before routes because it controls, filters, and prepares the request before business logic executes.