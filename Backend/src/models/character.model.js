const mongoose = require('mongoose');

const characterSchema = mongoose.Schema({

  comics: {
    available: Number,
    collectionURI: String,
    items: [{
      name: String,
      resourceURI: String
    }]
  },
  description: String,
  events: {
    available: Number,
    collectionURI: String,
    items: [{
      name: String,
      resourceURI: String
    }]
  },
  id: Number,
  modified: String,
  name: String,
  resourceURI: String,
  series: {
    available: Number,
    collectionURI: String,
    items: [{
      name: String,
      resourceURI: String
    }]
  },
  stories: {
    available: Number,
    collectionURI: String,
    items: [{
      name: String,
      resourceURI: String
    }]
  },
  thumbnail: {
    path: String,
    extension: String
  },
  urls: [{
    type: String,
    url: String
  }]

});

module.exports = mongoose.model('Character', characterSchema);
