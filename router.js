const express = require('express');
const router = express.Router();
const dashboard = require('./app/dashboard/router');

router.use('/', dashboard);

module.exports = router;