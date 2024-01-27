// server.js

const http = require('http');

const server = http.createServer((req, res) => {
  // Set the content type to JSON
  res.setHeader('Content-Type', 'application/json');

  // Handle different routes
  if (req.url === '/api/data') {
    // Simulate fetching data from a database
    const data = { message: 'Hello,  this go is your server response!' };

    // Send the data as a JSON string
    res.end(JSON.stringify(data));
  } else {
    // Handle other routes with a 404 response
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
