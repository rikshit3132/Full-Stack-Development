## Why only GET works directly in browser?
- When you type a URL in browser:
  - http://localhost:3000/notes
- Browser automatically sends a GET request

## Why not POST, PUT, DELETE?
- Because:
  - Browser URL bar is designed only to fetch data
  - It does NOT support:
  - sending body (data)
  - choosing method manually
 - So:
  - Typing URL → always GET
  - Clicking link → GET

# Then how do POST/PUT/DELETE work?
- You need tools that can:
  - change HTTP method
  - send data (body)
  - send headers
- That’s where Postman comes in