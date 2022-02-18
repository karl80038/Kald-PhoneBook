const fs = require('fs');
const path = require('path');

const filePath = path.join(path.dirname(require.main.filename), 'data', 'contacts.json');

const getContactsFromFile = (cb) => {
    fs.readFile(filePath, (error, fileContent) => {
        if(error){
           return cb([]);
        }

        cb(JSON.parse(fileContent));
    });
}

module.exports = class Contact {
    constructor(TelephoneNumber, FirstName, LastName){
        this.phoneNumber = TelephoneNumber;
        this.fName = FirstName;
        this.lName = LastName;

    }

    saveContact() {
        getContactsFromFile(contacts => {
           contacts.push(this);
           fs.writeFile(filePath, JSON.stringify(contacts), (error) => {
              console.log(error);
           }); 
        });

    }
    static fetchContacts(callBack){
        getContactsFromFile(callBack);
    }
    static  deleteByPhoneNumber(phoneNum){
        getContactsFromFile(contacts => {
            // const contact = contacts.find(contactInArray => contactInArray.phoneNumber === phoneNum);
            const updatedContacts = contacts.filter(contact => contact.phoneNumber !== phoneNum);
            fs.writeFile(filePath, JSON.stringify(updatedContacts), (error) => {
                if(!error)
                {
                    console.log("The file was updated"); 
                }
            });
        });
        
    }
}