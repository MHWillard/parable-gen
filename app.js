const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT
const cors = require('cors');
const {personSchema, Person, db, rollDocument, prepareArray} = require('./database')
const _ = require('lodash');

app.use(cors());

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected');
});

app.get('/', async (req, res) => {
  //const person = rollDocument();
  rollDocument().then(person => console.log(person));
  let workingArray = prepareArray();
  //const totalRecords = await Person.estimatedDocumentCount();
  //const rand = Math.floor(Math.random() * totalRecords);;
  //const person = await Person.findOne().skip(rand).lean();
  //let personJSON = JSON.stringify(person)
  //console.log('async object: ' + personJSON);
  //console.log('async: ' + personJSON.name);
  console.log(workingArray);
  res.json(person);

  /* 
      //nested object access?
  //roll person x14, add each one to a working array
  //then create a new final object which uses nested objects to access and assign these array values
  //finally, pass on the final object as json to React
  //store needed field
  //add to array
  let person = {name: 'karen', business: 'store owner'};
  let test = {one: person.name, two: person.business};
  return test

  function rollDocument() {
      const totalRecords = await Person.estimatedDocumentCount();
      const rand = Math.floor(Math.random() * totalRecords);;
      const person = await Person.findOne().skip(rand).lean();
      return person;
  }

  function prepareArray() {
    //require Underscore.js for this
    let workingArray = _.times(14, rollDocument());
  }

  function loadCompiledPerson() {
    let compiledPerson = {name: workingArray.[0].name}; //actual object, etc for each property
    //load each property
    return compiledPerson;
  }

  let person = {name: 'karen', business: 'store owner',timelimit: 60};
let test = {p1: person, p2: person};
console.log(test.p2.name);

let test2 = [person,person,person]
let compile = {
  name: test2[0].name,
  business: test2[1].business
}

console.log('compile: ' + compile.name)
  */
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});