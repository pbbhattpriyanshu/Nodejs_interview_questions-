import http from 'node:http';

let server = http.createServer()

// Listen to the request event
server.on('request', (request, res) => {
    const url = request.url;
    const method = request.method;

    // HOME ROUTE
    if (url === '/' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Welcome to Home' }));
    }
    // USERS ROUTE
    else if (url === '/users' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            users: [
                { id: 1, name: 'Piyush' },
                { id: 2, name: 'John' }
            ]
        }));
    }
    // CREATE USER
    else if (url === '/users' && method === 'POST') {
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'User created', id: 3 }));
    }
    // USER BY ID
    else if (url.startsWith('/users/') && method === 'GET') {
        const id = url.split('/')[2];
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ id, name: 'User ' + id }));
    }
    // PRODUCTS ROUTE
    else if (url === '/products' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ products: ['Laptop', 'Phone', 'Tablet'] }));
    }
    // 404 NOT FOUND
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Route not found' }));
    }
});

server.listen(8000, () => {
    console.log('Server running on http://localhost:8000');
});