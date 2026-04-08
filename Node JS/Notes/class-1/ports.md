## What are Ports?
- A port is like a door or channel through which data enters or leaves a computer.
   - Computer = House 
   - Ports = Doors
 - Each service uses a different port.

# How many ports are there?
- Total ports = 65,536
- Range:
  - 0 – 65535

# Port Categories
# Range       	 Type	            Example
0–1023	      Well-known ports	 HTTP (80), HTTPS (443)
1024–49151	  Registered ports	  Apps/services
49152–65535	   Dynamic/private	     Temporary use

# common ports ?
- 80 → HTTP 
- 443 → HTTPS 
- 3000 → Dev servers (Node.js)
- 3306 → MySQL

# Real Flow
- When you run:
  - node app.js
  - and:
- server.listen(3000);
- Your app runs on:
  - http://localhost:3000
- localhost → your computer
- 3000 → port number