sync. File System

Call Stack
┌──────────────┐
│ readFileSync │  ← blocks
└──────────────┘
       ↓
File System (OS)
       ↓
Data returned
<!-- Main thread is blocked
No other JS can run
Bad for servers -->
<!-- Why Sync fs is Dangerous in Servers?
One request blocks all others
Poor scalability
Slow performance -->

Async.file system

Call Stack
┌───────────┐
│ readFile  │
└─────┬─────┘
      │
   libuv Thread Pool
      │
   File System (OS)
      │
 Callback Queue
      │
 Event Loop

<!-- JS thread remains free
Scales well
 Preferred for production -->

 