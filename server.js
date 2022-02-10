const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const app = express();
console.log("Kald's Phonebook Application")
console.log("(C) Karl-Erik Kald. All Rights Reserved")
console.log("node.JS version ", process.version);

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', 'views');
//If missing, create a directory named 'data'
if (!fs.existsSync(path.join(__dirname, 'data'))){
    console.log("The directory named 'data' is not present. Adding a directory named data...");
    fs.mkdirSync(path.join(__dirname, 'data'));
    console.log("Done.")
}

app.listen(process.env.PORT || 3000, function(){
    console.log("Server has started");
})
