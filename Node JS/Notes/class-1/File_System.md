# file system in node js?
- The File System (FS) in Node.js is a built-in module that lets you work with files and directories on your system — like creating, reading, updating, deleting files, etc

# What is File System in Node.js?
- It is a module (fs) that allows Node.js to interact with your computer’s file system.

 - Think of it like:
  - Reading a .txt file 
  - Writing data into a file 
  - Creating folders 
  - Deleting files 

# How to use it?
- First, import the module:

```javascript
const fs = require('fs');
```
# Types of File System Operations
1. Synchronous (Blocking)
- Code waits until file operation completes
- Simple but slower
  
```javascript
const data = fs.readFileSync('file.txt', 'utf-8');
console.log(data);
```
2. Asynchronous (Non-blocking)
- Does NOT block execution (recommended)
```javascript
fs.readFile('file.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```
## Common FS Methods

# Read File

```javascript
fs.readFile('file.txt', 'utf-8', callback);
```
# Write File

```javascript
fs.writeFile('file.txt', 'Hello World', callback);
```
# Append File

```javascript
fs.appendFile('file.txt', 'New Data', callback);
```
# Delete File

```javascript
fs.unlink('file.txt', callback);
```
# Create Folder
 
```javascript
fs.mkdir('myFolder', callback);
```
# Delete Folder

```javascript
fs.rmdir('myFolder', callback);
```
## Promises Version (Modern Way)
- Node.js also supports promises:
```javascript
const fs = require('fs').promises;
async function readFile() {
  const data = await fs.readFile('file.txt', 'utf-8');
  console.log(data);
}

readFile();
```

## fs.stat()
```javascript
const fs = require('fs');

fs.stat('notes.json', (err, stats) => {
  if (err) throw err;

  console.log(stats);
});
```
Output:-
Stats {
  size: 120,
  birthtime: 2026-04-08T10:00:00.000Z,
  mtime: 2026-04-08T10:05:00.000Z,
  isFile: [Function],
  isDirectory: [Function]
}