const express = require('express');
require('dotenv').config();

const app = express();

app.get('/api/ping', (req, res) => res.send('ok!'));

const watson = require('./routes/assistant');
app.use('/api/assistant', watson);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Watson App Listening on http://localhost:${PORT}`);
});