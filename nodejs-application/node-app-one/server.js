'use strict';

const express = require('express');
var cors = require('cors');
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(cors());

const testData = [
    {
        country:'INDIA',
        state: 'TN' 
    },
    {
        country:'INDIA',
        state: 'KA' 
    }
]
app.get('/api1', (req, res) => {
  res.send(testData);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);