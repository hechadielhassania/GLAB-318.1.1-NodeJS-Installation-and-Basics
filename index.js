const http = require('http');
const url = require('url'); // Importing the URL module for parsing URL

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    // Parse the request URL
    const parsedUrl = url.parse(req.url, true);

    // Set the Content-Type header to HTML
    res.setHeader('Content-Type', 'text/html');

    // Default route
    if (parsedUrl.pathname === '/') {
        res.statusCode = 200;
        res.write('<h1 style="color: red">Hello World!</h1>');
        res.write('<p>I wonder what else we can send...</p>');
        res.end();
    }
    // Custom route 1: Basic HTML page
    else if (parsedUrl.pathname === '/about') {
        res.statusCode = 200;
        res.write('<h1>About Us</h1>');
        res.write('<p>Welcome to our website!</p>');
        res.end();
    }
    // Custom route 2: Parsing query parameters
    else if (parsedUrl.pathname === '/query') {
        // Get the query parameters
        const queryParams = parsedUrl.query;
        res.statusCode = 200;
        res.write('<h1>Query Parameters</h1>');
        res.write('<p>');
        // Loop through the parameters and display them
        for (const key in queryParams) {
            res.write(`<b>${key}:</b> ${queryParams[key]}<br>`);
        }
        res.write('</p>');
        res.end();
    }
    // Handle 404 - Not Found
    else {
        res.statusCode = 404;
        res.write('<h1>404 Not Found</h1>');
        res.end();
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
