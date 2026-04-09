# Api Creation

# Now: Build COMPLETE Notes API (All Methods)

```javascript
const express = require('express');
const app = express();

app.use(express.json()); // to read JSON body

let notes = [
  { id: 1, title: "DSA", content: "Practice daily" }
];

// GET - all notes
app.get('/notes', (req, res) => {
  res.json(notes);
});

// GET - single note
app.get('/notes/:id', (req, res) => {
  const note = notes.find(n => n.id == req.params.id);
  if (!note) return res.status(404).send('Not found');
  res.json(note);
});

// POST - create note
app.post('/notes', (req, res) => {
  const newNote = {
    id: notes.length + 1,
    title: req.body.title,
    content: req.body.content
  };
  notes.push(newNote);
  res.status(201).json(newNote);
});

// PUT - full update
app.put('/notes/:id', (req, res) => {
  const note = notes.find(n => n.id == req.params.id);
  if (!note) return res.status(404).send('Not found');

  note.title = req.body.title;
  note.content = req.body.content;

  res.json(note);
});

// PATCH - partial update
app.patch('/notes/:id', (req, res) => {
  const note = notes.find(n => n.id == req.params.id);
  if (!note) return res.status(404).send('Not found');

  if (req.body.title) note.title = req.body.title;
  if (req.body.content) note.content = req.body.content;

  res.json(note);
});

// DELETE
app.delete('/notes/:id', (req, res) => {
  notes = notes.filter(n => n.id != req.params.id);
  res.send('Note deleted');
});

// start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});

```

- Browser:
  - GET /notes → works

-  Postman:
  - POST → create note 
  - PUT → update
  - PATCH → partial update
  - DELETE → delete
- Final Understanding
  - Browser → only GET (limited)
  - Postman → full API testing tool
  - Backend → supports all HTTP methods

# Big Picture First

- You built an API using Express.js.
- Now:
  - Server is ready 
  - But you need a way to send different types of requests
- That’s where:
- Browser (limited)
- Postman (powerful)

# PART 1: Testing using Browser (ONLY GET)
- Example
- Open:
  - http://localhost:3000/notes
- What happens:
  - Browser sends: GET request
  - Server returns: list of notes

# Limitation

- You CANNOT:
 - Send POST 
 - Send JSON body 
 - Update or delete 
- Because browser URL bar = read-only tool
# PART 2: Testing using Postman (FULL CONTROL)
- Now we test ALL methods one by one.

## 1. GET → Fetch Notes
- Setup:
- Method: GET
- URL:
  - http://localhost:3000/notes
- Output:
[
  {
    "id": 1,
    "title": "DSA",
    "content": "Practice daily"
  }
]
- No body needed
## 2. POST → Create Note
- Setup:
- Method: POST
- URL:
  - http://localhost:3000/notes
- Body → raw → JSON:
```javascript
{
  "title": "Node",
  "content": "Learn Express"
}
- Output:
{
  "id": 2,
  "title": "Node",
  "content": "Learn Express"
}
```
- New note added 

## 3. PUT → Full Update
- Setup:
- Method: PUT
- URL:
  - http://localhost:3000/notes/1
- Body:
```javascript
{
  "title": "DSA Updated",
  "content": "Revise daily"
}
```
- Replaces entire note

## 4. PATCH → Partial Update
- Setup:
- Method: PATCH
- URL:
  - http://localhost:3000/notes/1
- Body:
```javascript
{
  "title": "Only Title Changed"
}
```
- Only updates title (content remains same)

## 5. DELETE → Remove Note
- Setup:
- Method: DELETE
- URL:
  - http://localhost:3000/notes/1
- Note deleted 

# VERY IMPORTANT CONCEPTS
 1. req.body (POST, PUT, PATCH)
- Data you send:
```javascript
{
  "title": "Node"
}
```
- Access in code:
- req.body.title

2. req.params (URL data)
- URL:
- /notes/1
- Access:
  - req.params.id
3. req.query (extra filters)
- URL:
   - /notes?search=DSA
- Access:
  - req.query.search
- Common Mistakes (VERY IMPORTANT)
- Forgetting this:
  - app.use(express.json());
- Then req.body will be undefined
- Not setting JSON in Postman

# Always:
- Body → raw → JSON
- Real Industry Flow
  - Backend dev builds API
  - Uses Postman to test
  - Frontend (React) connects to API
-So Postman = bridge between backend & frontend

# Final Understanding 
Browser → only GET (view data)
Postman → full API testing (create/update/delete)
APIs → work using HTTP methods




