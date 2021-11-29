const cors = require('cors');
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const connectDB = require('./database');
const app = express();
app.use(express.json());
app.use(cors());
connectDB();

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('this works!');
});

app.use('/users', require('./routes/users'));

app.listen(PORT, () => console.log(`The server is running on port ${PORT}!`));
