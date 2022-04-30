const mongoose = require('mongoose');

const favouriteSchema = mongoose.Schema({
  description: String,
  id: Number,
  name: String,
  thumbnail: {
    path: String,
    extension: String
  }
});

module.exports = mongoose.model('favourite', favouriteSchema);
