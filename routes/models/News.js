var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    title: { type: String, require: true },
    body: { type: String },
    date: { type: Date },
    description: { type: String },
    image: { type: String },
    likes: { type: Number }
});

module.exports = mongoose.model('News', schema);