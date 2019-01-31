var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var goodsSchema = new Schema({
    name: String,
    price: Number,
    seller: String,
    tag : Array,
    updatedAt: { type: Date, default: Date.now  }
});

module.exports = mongoose.model('goods', goodsSchema);
