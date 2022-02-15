const Contact = require('../models/contact');
var FirstName = "First Name";
var LastName = "Last Name";
var PhoneNo = "Telephone Number";
exports.postContacts = (req, res) => {
    var NFName;
    var NLName;
    var NPhoneN;
    if (NFName != "" && NLName != "" && NPhoneN != "")
    {
        const contact = new Contact(NPhoneN, NFName, NLName);
        contact.saveContact();
        res.redirect('/');
    }

}
exports.getContacts = (req, res) => {
    Contact.getContacts((contacts)=>{
        res.render('contacts', {
            pageTitle: 'Contacts',
            contactFirstName: FirstName,
            contactLastName: LastName,
            contactPhoneNumber: PhoneNo,
            contacts: contacts,
            path: '/'
        });
    })

}