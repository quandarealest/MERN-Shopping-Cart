const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');
const config = require('./config/keys');

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

//DB Config
const { mongoURI, user, pass } = config;

//Connect to Mongo
mongoose
  .connect(mongoURI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    user,
    pass,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

//Use routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;

  app.listen(port, () => console.log(`Server started on port ${port}`));