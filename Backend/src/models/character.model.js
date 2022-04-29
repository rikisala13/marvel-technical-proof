const mongoose = require('mongoose');

const completeCharacterSchema = mongoose.Schema({
  id: String,
  user: {
    name: String,
    picture: String,
    email: String
  },
  character: {
    id: Number,
    name: String,
    thumbnail: {
      extension: String,
      path: String
    },
    like: Boolean,
    score: Number,
    coments: [
      { String }
    ],
    totalScore: Number
  }
});

module.exports = mongoose.model('CompleteCharacter', completeCharacterSchema);
