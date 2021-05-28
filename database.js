require('dotenv').config()
const MongoClient = require('mongodb').MongoClient;
const uri = process.env.URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

//Replace <password> with the password for the harvey user. Replace myFirstDatabase with the name of the database that connections will use by default. Ensure any option params are URL encoded.