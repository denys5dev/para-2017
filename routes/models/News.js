var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    title: { type: String, require: true },
    body: { type: String },
    date: { type: Date },
    likes: { type: Number }
});

module.exports = mongoose.model('News', schema);