# creating server using express

```javascript
const express = require('express');
const app = express();

// route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// server start
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

# Add More Routes (Important)

```javascript
app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/contact', (req, res) => {
  res.send('Contact Page');
});
``` 
