const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/myname', (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            res.status(400).json({ error: 'Name is required' });
            return;
        }
        
        res.send(`Welcome ${name}`);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
});

// New code snippets
app.get('/hello', (req, res) => {
    res.set('content-type', 'text/html');
    res.status(200);
    res.send("<h1>Hello world </h1>");
});

app.use(express.json());
app.post("/validateUser", (req, res) => {
    console.log(req.body);
    const { userName, password } = req.body;

    if (userName === "Ramesh" && password === "ram123") {
        res.send("Login successful....");
    } else {
        res.send("Invalid username or password..");
    }
});

app.get('/getImage', (req, res) => {
    res.sendFile(path.join(__dirname, "images.png"));
});

app.listen(PORT, (error) => {
    if (!error) {
        console.log("Server successfully listening on port 3000");
    } else {
        console.log("Error occurred, Server can't start", error);
    }
});
