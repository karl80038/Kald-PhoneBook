const express = require('express');
const phonebookcontroller = require('../controllers/phoneBook');
const router = express.Router();

router.get('/', phonebookcontroller);

module.exports = router;