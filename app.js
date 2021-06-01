const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT
const cors = require('cors');
const {findPerson, personSchema, Person, db} = require('./database')

app.use(cors());

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected');
});

app.get('/', (req, res) => {
    res.send({message: 'Backend online.'});
    //use Mongoose to get data here, so React will automatically grab it and pass to render
    let person = findPerson(Person);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

//use Mongoose to grab Atlas data
//pull it to app.get route
//React will grab and render it