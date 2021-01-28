const express = require('express');
const bodyParser = require('body-parser');
const dbConnection = require('./config/db');
const user = require('./routes/user');

dbConnection();
const app = express();

const PORT = process.env.PORT || 8000;

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("hello world")
})

app.use("/user", user);

app.listen(PORT, (req, res) => {
    console.log(`server started and running on port ${PORT}`);
})