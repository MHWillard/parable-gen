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

function prepareArray() {
  //require Underscore.js for this
  let workingArray = _.times(14, rollDocument());
  return workingArray;
}

module.exports = {personSchema, Person, db, rollDocument, prepareArray}