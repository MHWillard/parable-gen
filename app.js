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
  const totalRecords = await Person.estimatedDocumentCount();
  const rand = Math.floor(Math.random() * totalRecords);;
  const person = await Person.findOne().skip(rand).lean();
  console.log('async: ' + person.name);
  res.json(person);

  //run a random count each time
  //get document
  //assign chosen value to object to pass over
  // rolls 14 times: it needs to roll, get the appropriate value, then load it into the object to pass on
  //each entry should be its own mini-collection, then the object can just run the command to pull for each one and assign it to the key at the same time: key = vafunction();
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});