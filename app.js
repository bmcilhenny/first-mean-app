const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

Golfer = require('./models/golfer');
Sponsor = require('./models/sponsor');

//connect to mongoose
mongoose.connect('mongodb://localhost/golfer');
const db = mongoose.connection;

//handles requests, get, post, put, delete, any HTTP request
app.get('/', function(req, resp) {
  // sends to the browser whatever we put in there
  resp.send('Use /api/golfers poop');
});

app.get('/api/golfers', function(req, resp) {
  // sends to the browser whatever we put in there
  //resp.send('Use /api/golfers');
  Golfer.getGolfers(function(err, golfers){
    if (err) {
      throw err;
    }
    resp.json(golfers);
  })
});

app.get('/api/golfers/:_id', function(req, resp) {
  // sends to the browser whatever we put in there
  Golfer.getGolferById(req.params._id, function(err, golfer){
    if (err) {
      throw err;
    }
    resp.json(golfer);
  })
});

app.get('/api/sponsors', function(req, resp) {
  // sends to the browser whatever we put in there
  Sponsor.getSponsors(function(err, sponsors){
    if (err) {
      throw err;
    }
    resp.json(sponsors);
  })
});

//before we can run the app, we need to tell the app where listen.... on port 3000
app.listen(3000);
console.log('Running on port 3000.....')
