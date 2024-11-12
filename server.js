const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files from the 'public' directory

// Endpoint to save client data
app.post('/save-client', (req, res) => {
    const clientData = req.body;

    // Create a new file or append to an existing one
    const filePath = path.join(__dirname, 'clients.json');

    // Read existing data
    fs.readFile(filePath, 'utf8', (err, data) => {
        let clients = [];
        if (!err && data) {
            clients = JSON.parse(data);
        }

        // Add new client data
        clients.push(clientData);

        // Write updated data back to the file
        fs.writeFile(filePath, JSON.stringify(clients, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Error saving data');
            }
            res.send('Client data saved successfully');
        });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
