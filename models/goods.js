const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const goodsSchema = new Schema({
    name: String,
    price: Number,
    seller: String,
    tag : Array
},
{
  collection:"goods",
  timestamps: true
});

module.exports = mongoose.model('goods', goodsSchema);
