const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

// Import Routes
const metricsRoute = require('./routes/metrics');
app.use('/metrics', metricsRoute)

app.get('/', (req, res) => {
    res.send('we are on home')
});

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('Connected to DB!');
});

app.listen(3000);