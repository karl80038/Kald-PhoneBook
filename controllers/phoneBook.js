const Contact = require('../models/contact');
exports.getContacts = (req, res) => {
    Contact.getContacts((contacts)=>{
        res.render('contacts', {
            
        });
    })

}