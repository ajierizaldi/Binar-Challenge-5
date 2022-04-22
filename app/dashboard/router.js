const express = require('express');
const router = express.Router();
const controller = require('./controllers/controller.js');

// router.get('/', controller.index);
router.get('/', (req, res) => {
    res.render('index')
});    
router.get('/add', controller.add);
router.get('/update', controller.edit);

module.exports = router;