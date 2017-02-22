var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Glider = require('./Glider');

var schema = new Schema({
    name: { type: String, require: true },
    adress: { type: String },
    city: { type: String },
    country: { type: String },
    email: { type: String, require: true },
    web: { type: String },
    phone: { type: String },
    logo: { type: String },
    gliders: [{type: Schema.Types.ObjectId, ref: 'Glider'}]
});

module.exports = mongoose.model('Company', schema);