import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
    const userIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    console.log(`User IP Address: ${userIP}`);

    // Save IP to file
    fs.appendFile('user_ips.txt', `${userIP}\n`, (err) => {
        if (err) console.error('Error saving IP:', err);
        else console.log('IP saved successfully.');
    });

    // Serve the HTML file
    fs.readFile('index.html', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end('<h1>Error loading page</h1>');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});

const PORT = 5500;
server.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:5500/day25`);
});
