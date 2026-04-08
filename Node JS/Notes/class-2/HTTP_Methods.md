# HTTP Methods
- HTTP methods are ways for a client (browser/app) to communicate with a server in web development (like in Express.js).

# Main HTTP Methods
1. GET → Fetch Data
   - Used to get data from server.

``` javascript
app.get('/users', (req, res) => {
  res.send('All users');
});
```
- Example:
 - Get all notes
 - Fetch user data

2. POST →  Create Data
- Used to send data and create something new
``` javascript

app.post('/users', (req, res) => {
  res.send('User created');
});

```
- Example:
 - Add new note
 - Register user

3. PUT → Replace Data (FULL update)
- Used to update entire resource

```javascript
app.put('/users/1', (req, res) => {
  res.send('User fully updated');
});
```
- Replaces everything
  
4. PATCH → Partial Update
- Used to update only specific fields

```javascript
app.patch('/users/1', (req, res) => {
  res.send('User partially updated');
});
```
- Example:
  - Update only username
  - Change email only

5. DELETE → Remove Data
- Used to delete resource

``` javascript
app.delete('/users/1', (req, res) => {
  res.send('User deleted');
});
```

# Easy Way to Remember
Method	        Meaning
GET            	 Read
POST	         Create
PUT	Full         Update
PATCH	        Partial Update
DELETE	         Remove

# This is called CRUD operations:
C → Create (POST)
R → Read (GET)
U → Update (PUT/PATCH)
D → Delete (DELETE)