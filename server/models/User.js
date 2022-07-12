const { Schema, model } = require('mongoose');

const User = new Schema({
  userName: { type: String, unique: true, dropDups: true, required: true },
  password: { type: String, required: true },
});

module.exports = model('User', User);
