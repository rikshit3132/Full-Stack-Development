Synchronous Function
<!-- Functions provided by the JS lang. or node -->
Call Stack
┌──────────┐
│ func()   │ ← runs immediately
└──────────┘

Asynchronous Function
<!-- Functions provided by the environment/browser -->
 ┌────────────────────────┐
 │   JavaScript Engine    │
 │                        │
 │   ┌──────────────┐    │
 │   │  Call Stack  │    │
 │   └──────────────┘    │
 └────────▲──────────────┘
          │
 ┌────────┴────────┐
 │  Browser APIs   │
 │                 │
 │ setTimeout      │
 │ DOM Events      │
 └────────▲────────┘
          │
 ┌────────┴────────┐
 │ Callback Queue  │
 └────────▲────────┘
          │
        Event Loop
<!-- when there comes an Async. code in js file
It is pushed into the web Api.
When the time is up it will fetched into the
callback queue/macrotask queue
from where if stack is empty than event loop
take it from queue and put it into callstack
for execution.At a time one async. code executes. -->