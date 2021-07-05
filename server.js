const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT
const cors = require('cors');
const {db, preparePersonPayload} = require('./database')

app.use(cors());

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected');
});

app.get('/', async (req, res) => {
  const randomPerson = await preparePersonPayload();
  res.json(randomPerson);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});