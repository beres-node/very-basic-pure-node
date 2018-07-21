// Load HTTP module
const http = require('http'); // Create a read-only reference to a value = "http" and assigned it with Node API = "http" which is required to use HTTP server and client
const hostname = '127.0.0.1'; // Create a read-only reference to a value = "hostname" and assigned it with IP address = "localhost"
const port = 3000; // Create a read-only reference to a value = "port" and assigned it with PORT number = 3000

// Create HTTP server and listen on port 3000 for requests
// Details: https://nodejs.org/api/http.html
const server = http.createServer((req, res) => { // Create HTTP server, create a read-only reference to a value = "server" and assigned with Node API = "http.createServer"

	// Set the response HTTP header with HTTP status and Content type
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World\n');
});

// Listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`)
});