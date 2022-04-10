const mongoose = require('mongoose');

const isBase64Image = (str) => {
  return str.includes('data:image') && str.includes('base64')
}

const tokenSchema = new mongoose.Schema({
  name: {
    type: String,
    tim: true,
    required: [true, 'token name is required'],
  },
  currency: {
    type: String,
    unique: true,
    uppercase: true,
    trim: true,
    required: [true, 'token currency is required'],
  },
  address: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: [true, 'token contract address is required'],
  },
  icon: {
    type: String,
    required: [true, 'token icon is required'],
    validate: [isBase64Image, 'token icon should be a base64 image string' ]
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//  Replaces _id with id, and removes _v
tokenSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

const Token = mongoose.model('Token', tokenSchema);

module.exports = { Token };
