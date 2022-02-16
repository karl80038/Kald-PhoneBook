const Contact = require('../models/contact');
var FirstName = "First Name";
var LastName = "Last Name";
var PhoneNo = "Telephone Number";
var homeLink = {url: "/", title: "Home" };
var newContact = {url: "/new-contact", title: "New Contact..."};
var navArray = [homeLink, newContact];

exports.getAddContactPage = 
    (req, res) => {
    res.render('newcontact', {
        pageTitle: "Add New Contact",
        navItemArray: navArray,
        path: "/admin/add-wish",
        showModal: false,
        messageTitle: "Unable to complete the request",
        messageContent: "Error message goes here"
    });
}

exports.postContacts = (req, res) => {
    var NFName = req.body.fNameField;
    var NLName = req.body.lNameField;
    var NPhoneN = req.body.phoneNumField;
    if (NFName != "" && NLName != "" && NPhoneN != "")
    {
        const contact = new Contact(NPhoneN, NFName, NLName);
        contact.saveContact();
        res.redirect('/');
    }
    else
    {
        res.render('newcontact', {
            pageTitle: "Add New Contact",
            navItemArray: navArray,
            path: "/admin/add-wish",
            showModal: true,
            messageTitle: "Unable to complete the request",
            messageContent: "You must fill all the three fields before you can add a new contact to the phonebook."
        });
    }
}
exports.getContacts = (req, res) => {
    Contact.fetchContacts((contacts)=>{
        res.render('contacts', {
            pageTitle: 'Contacts',
            navItemArray: navArray,
            contactFirstName: FirstName,
            contactLastName: LastName,
            contactPhoneNumber: PhoneNo,
            contacts: contacts,
            path: '/'
        });
    })

}