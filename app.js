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

app.get('/', async (req, res) => {
    let person = await findPerson(Person);
    //res.send({firstname: "karen"});
    res.json({person});
    //use Mongoose to get data here, so React will automatically grab it and pass to render
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

//use Mongoose to grab Atlas data
//pull it to app.get route
//React will grab and render it