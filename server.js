const express = require('express');
const path = require('path');

const app = express();
const port = 3011;

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
