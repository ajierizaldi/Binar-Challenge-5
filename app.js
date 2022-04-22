require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router');
const port = process.env.PORT || 3030;
const ejs = require('ejs');

app.set('view engine', 'ejs');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', router)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});