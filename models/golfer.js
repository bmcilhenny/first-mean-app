const mongoose = require('mongoose');

// create a schema
//not required for the db, this is just for the app
let golferSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  age:{
    type: Number,
    min: 0, max: 130,
    required: true
  },
  create_date:{
    type: Date,
    default: Date.now
  }
});

const Golfer = module.exports = mongoose.model('Golfer', golferSchema);

// get golfers
module.exports.getGolfers = function(callback, limit) {
  Golfer.find(callback).limit(limit);
}

//get golfer
module.exports.getGolferById = function(id, callback) {
  Golfer.findById(id, callback);
}
