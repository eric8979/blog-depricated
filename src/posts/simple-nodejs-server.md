---
title: simple nodejs server
subtitle: Simple nodejs server and the mechanism
category: nodejs
slug: simple-nodejs-server
date: 2021-07-09T17:07:00+00:00
featuredImgUrl: https://logosvector.net/wp-content/uploads/2015/09/nodejs-logo.png
featuredImgAlt: simple-nodejs-server
imgSource: https://logosvector.net/ (by Hanson Chan)
---

#### The code

<br>

```javascript
const http = require("http")

// create the server
const server = http.createServer((req, res) => {
  // check request from a client
  if (req.url === "/") {
    // response to the client
    res.end("welcome to my home page")
  } else {
    res.end(`<h1>Page Not Found</h1>`)
  }
})

// start the server
server.listen(5000, () => console.log("server listening on port 5000"))
```

<br>

#### Mechanism

1. **http.createServer(callback)** is called.

2. This creates and returns an http server object and configures with that server object a callback to be called on each new incoming request. The server is not yet running.

3. **server.listen(port, callback)** is called.

4. Now the server is running on a particular port. When the process of starting the server is complete, then the callback gets called to notify you that the server is now up and running.

5. When new request arrives, event will be dispatched to the nodejs event loop. Event loop will soon get to the event and call the callback from createServer(callback).

6. The event loop will wait for next event.

<br>

For more detailed information. ⬇️
<br>
[How does the basic nodejs server setup works - stackoverflow](https://stackoverflow.com/questions/68310881/how-does-the-basic-nodejs-server-setup-code-works)

<br>

#### What is a event loop

Event loop is where everything happens.

<br>

|                     |            |                      |
| ------------------: | :--------: | -------------------: |
|          request ➡️ | Event Loop | ➡️ register callback |
|                  ️️ |            |                  ⬇️️ |
| execute callback ⬅️ | Event Loop | ⬅️ callback complete |

<br>
<br>

#### +bonus: npm and npx

- npm: package manager

- npx: package runner (Allows user to run CLI tool(script) without installing the package)

<br>

In order to use nodemon globally, you have to install it globally first(or at least in the folder). But with npx you just can use(execute) it like create-react-app.
