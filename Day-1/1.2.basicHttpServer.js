const http = require('http');

const hostname = '127.0.0.1';
const port = 3000; 

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  const responseData = {
    message: 'Hello, World!'
  };
  res.end(JSON.stringify(responseData))
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
