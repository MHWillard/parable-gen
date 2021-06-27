require('dotenv').config()

//Mongoose setup
const mongoose = require('mongoose');
const random = require('mongoose-simple-random');
const _ = require('lodash');
const uri = process.env.URI
const {Schema} = mongoose;

//connect to Mongo
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

//make connection and log to console
const db = mongoose.connection;
//db.on('error', console.error.bind(console, 'connection error:'));
//db.once('open', function() {
//  console.log('Connected');
//});

//arm schema
const personSchema = new Schema({
  firstname: String,
  lastname: String,
  age: Number,
  problem: String,
  business: String,
  goal: String,
  moneygoal: Number
  });
  personSchema.plugin(random);

//arm model based on schema set
const Person = mongoose.model('person', personSchema);

//make new document
//let karen = new Person({firstname: 'Karen', lastname: 'Whitem', age: 40, problem: 'doesn\'t make a million dollars in a month, the bomb inside of her chest will explode.', business: 'real estate', goal: 'follow the seven Big Money Tasks or splatter the garden party with her blood', moneygoal: 1000000})

//save new document
//karen.save(function (err, karen) {
  //if (err) return console.error(err);
  //console.log(karen);
//});

//look up document
// an async function always returns a promise

async function rollDocument() {
  const totalRecords = await Person.estimatedDocumentCount();
  const rand = Math.floor(Math.random() * totalRecords);;
  const person = await Person.findOne().skip(rand).lean();
  return person;
}

async function prepareArray() {
  let workingArray = [];
  for (let step = 0; step < 14; step++) {
    let person = await rollDocument();
    workingArray.push(person);
  }
  return workingArray;
}

async function createRandomPerson(workingArray) {
    let randomPerson = {
      name: workingArray[0].name, 
      pronoun: workingArray[1].pronoun,
      business: workingArray[2].business,
      desc1: workingArray[3].desc1,
      problem1: workingArray[4].problem1,
      problem2: workingArray[5].problem2,
      problem3: workingArray[6].problem3,
      timelimit: workingArray[7].timelimit,
      mentor1: workingArray[8].mentor1,
      mentor2: workingArray[9].mentor2,
      advice: workingArray[10].advice,
      title1: workingArray[11].title1,
      title2: workingArray[12].title2,
      title3: workingArray[13].title3
    }
    return randomPerson;
}

async function preparePersonPayload() {
  let workingArray = await prepareArray();
  let randomPerson = await createRandomPerson(workingArray);
  return randomPerson;
}

module.exports = {personSchema, Person, db, rollDocument, prepareArray, createRandomPerson, preparePersonPayload}