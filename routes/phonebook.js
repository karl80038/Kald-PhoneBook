const express = require('express');
const path = require('path');
const rootDirectory = require('../utilities/path');
const phonebookcontroller = require('../controllers/phoneBook');
const contactCreatorData = require('./addcontact');
const router = express.Router();

router.get('/', phonebookcontroller.getContacts);
router.post('/delete-contact', phonebookcontroller.postDeleteContact);

module.exports = router;