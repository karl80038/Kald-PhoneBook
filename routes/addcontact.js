const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rootDirectory = require('../utilities/path');
const phonebookcontroller = require('../controllers/phoneBook');
const router = express.Router();

router.get('/new-contact', phonebookcontroller.getAddContactPage);
router.post('/new-contact', phonebookcontroller.postContacts);

module.exports = router;
