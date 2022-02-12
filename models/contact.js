const fs = require('fs');
const path = require('path');
module.exports = class Contact {
    constructor(TelephoneNumber, FirstName, LastName){
        this.phoneNumber = TelephoneNumber;
        this.fName = FirstName;
        this.lName = LastName;

    }

    saveContact() {

        const dataPath = path.join(path.dirname(process.mainModule.filename),
        'data',
        'contacts.json'        
        );
        
        console.log(dataPath);
        fs.readFile(dataPath, (error, fileContent) => {
            let contacts = [];
            if(!error){
                contacts = JSON.parse(fileContent);
            }
            wishes.push(this);

            fs.writeFile(dataPath, JSON.stringify(contacts), (error) => {
                console.log(error);
            });

        });

    }
    static fetchContacts(callBack){
        const dataPath = path.join(path.dirname(process.mainModule.filename),
        'data',
        'contacts.json'        
        );

        fs.readFile(dataPath, (error, fileContent) => {
            if(error){
                return callBack([]);
            }
            callBack(JSON.parse(fileContent));
        });
    }
}