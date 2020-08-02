'use strict';

const express = require('express');
var cors = require('cors');
// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(cors());

const testData = [
    {
        district:'VELLORE',
        state: 'TN' 
    },
    {
        district:'BANGALORE',
        state: 'KA' 
    }
]
app.get('/api2', (req, res) => {
  res.send(testData);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);