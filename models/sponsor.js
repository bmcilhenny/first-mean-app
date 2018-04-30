const mongoose = require('mongoose');

// create a schema
//not required for the db, this is just for the app
let sponsorSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  create_date:{
    type: Date,
    default: Date.now
  }
});

const Sponsor = module.exports = mongoose.model('Sponsor', sponsorSchema);

// get sponsors
module.exports.getSponsor = function(callback, limit) {
  Sponsor.find(callback).limit(limit);
}

// get sponsor
module.exports.getSponsorById = function(id, callback) {
  Sponsor.findById(id, callback);
}
