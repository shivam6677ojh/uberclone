const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express');
const app = express();
const connectTodb = require('./db/db.js');
const userRoutes = require('./routes/user.routes.js');

connectTodb();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req,res) => {
    res.send('Hello World!');
})

app.use('/api/users', userRoutes);

module.exports = app;

