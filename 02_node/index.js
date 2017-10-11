const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const port = 3001;


app.use(bodyParser.json());
app.use(cors());

app.get('/api/nameOfFile', (req, res) => {
    res.status(200).send(nameOfFile)
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})